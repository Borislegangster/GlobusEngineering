from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database import get_db
from app.models.cms import (
    PageContent, ServiceItem, ProjectItem, BlogPost, SiteSettings,
    TeamMember, Testimonial, FaqItem
)
from app.schemas.cms import (
    PageContent as PageContentSchema, PageContentCreate,
    ServiceItem as ServiceItemSchema, ServiceItemCreate,
    ProjectItem as ProjectItemSchema, ProjectItemCreate,
    BlogPost as BlogPostSchema, BlogPostCreate,
    SiteSetting as SiteSettingSchema, SiteSettingCreate,
    TeamMember as TeamMemberSchema, TeamMemberCreate,
    Testimonial as TestimonialSchema, TestimonialCreate,
    FaqItem as FaqItemSchema, FaqItemCreate
)

router = APIRouter(prefix="/cms", tags=["CMS"])

# --- Pages ---
@router.get("/pages/", response_model=List[PageContentSchema])
def read_pages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    pages = db.query(PageContent).offset(skip).limit(limit).all()
    return pages

@router.get("/pages/{slug}", response_model=PageContentSchema)
def read_page(slug: str, db: Session = Depends(get_db)):
    db_page = db.query(PageContent).filter(PageContent.slug == slug).first()
    if db_page is None:
        raise HTTPException(status_code=404, detail="Page not found")
    return db_page

@router.post("/pages/", response_model=PageContentSchema, status_code=status.HTTP_201_CREATED)
def create_page(page: PageContentCreate, db: Session = Depends(get_db)):
    db_page = PageContent(**page.model_dump())
    db.add(db_page)
    db.commit()
    db.refresh(db_page)
    return db_page

@router.put("/pages/{slug}", response_model=PageContentSchema)
def update_page(slug: str, page: PageContentCreate, db: Session = Depends(get_db)):
    db_page = db.query(PageContent).filter(PageContent.slug == slug).first()
    if not db_page:
        raise HTTPException(status_code=404, detail="Page not found")

    update_data = page.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_page, key, value)

    db.commit()
    db.refresh(db_page)
    return db_page

# --- Services ---
@router.get("/services/", response_model=List[ServiceItemSchema])
def read_services(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    services = db.query(ServiceItem).offset(skip).limit(limit).all()
    return services

@router.post("/services/", response_model=ServiceItemSchema, status_code=status.HTTP_201_CREATED)
def create_service(service: ServiceItemCreate, db: Session = Depends(get_db)):
    db_service = ServiceItem(**service.model_dump())
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service

# --- Projects ---
@router.get("/projects/", response_model=List[ProjectItemSchema])
def read_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    projects = db.query(ProjectItem).offset(skip).limit(limit).all()
    return projects

@router.get("/projects/{slug}", response_model=ProjectItemSchema)
def read_project(slug: str, db: Session = Depends(get_db)):
    db_project = db.query(ProjectItem).filter(ProjectItem.slug == slug).first()
    if db_project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return db_project

@router.post("/projects/", response_model=ProjectItemSchema, status_code=status.HTTP_201_CREATED)
def create_project(project: ProjectItemCreate, db: Session = Depends(get_db)):
    db_project = ProjectItem(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

# --- Blog ---
@router.get("/blog/", response_model=List[BlogPostSchema])
def read_blog_posts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    posts = db.query(BlogPost).offset(skip).limit(limit).all()
    return posts

@router.get("/blog/{slug}", response_model=BlogPostSchema)
def read_blog_post(slug: str, db: Session = Depends(get_db)):
    post = db.query(BlogPost).filter(BlogPost.slug == slug).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

@router.post("/blog/", response_model=BlogPostSchema, status_code=status.HTTP_201_CREATED)
def create_blog_post(post: BlogPostCreate, db: Session = Depends(get_db)):
    db_post = BlogPost(**post.model_dump())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

# --- Settings ---
@router.get("/settings/", response_model=List[SiteSettingSchema])
def read_settings(db: Session = Depends(get_db)):
    settings = db.query(SiteSettings).all()
    return settings

@router.post("/settings/", response_model=SiteSettingSchema)
def create_setting(setting: SiteSettingCreate, db: Session = Depends(get_db)):
    # Upsert logic
    db_setting = db.query(SiteSettings).filter(SiteSettings.key == setting.key).first()
    if db_setting:
        db_setting.value = setting.value
    else:
        db_setting = SiteSettings(**setting.model_dump())
        db.add(db_setting)

    db.commit()
    db.refresh(db_setting)
    return db_setting

@router.put("/services/{slug}", response_model=ServiceItemSchema)
def update_service(slug: str, service: ServiceItemCreate, db: Session = Depends(get_db)):
    db_item = db.query(ServiceItem).filter(ServiceItem.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in service.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/services/{slug}", status_code=status.HTTP_204_NO_CONTENT)
def delete_service(slug: str, db: Session = Depends(get_db)):
    db_item = db.query(ServiceItem).filter(ServiceItem.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()

@router.put("/projects/{slug}", response_model=ProjectItemSchema)
def update_project(slug: str, project: ProjectItemCreate, db: Session = Depends(get_db)):
    db_item = db.query(ProjectItem).filter(ProjectItem.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in project.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/projects/{slug}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(slug: str, db: Session = Depends(get_db)):
    db_item = db.query(ProjectItem).filter(ProjectItem.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()

@router.put("/blog/{slug}", response_model=BlogPostSchema)
def update_blog(slug: str, post: BlogPostCreate, db: Session = Depends(get_db)):
    db_item = db.query(BlogPost).filter(BlogPost.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in post.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/blog/{slug}", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(slug: str, db: Session = Depends(get_db)):
    db_item = db.query(BlogPost).filter(BlogPost.slug == slug).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()

@router.put("/team/{id}", response_model=TeamMemberSchema)
def update_team_member(id: int, member: TeamMemberCreate, db: Session = Depends(get_db)):
    db_item = db.query(TeamMember).filter(TeamMember.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in member.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/team/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_team_member(id: int, db: Session = Depends(get_db)):
    db_item = db.query(TeamMember).filter(TeamMember.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()

@router.put("/testimonials/{id}", response_model=TestimonialSchema)
def update_testimonial(id: int, testimonial: TestimonialCreate, db: Session = Depends(get_db)):
    db_item = db.query(Testimonial).filter(Testimonial.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in testimonial.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/testimonials/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_testimonial(id: int, db: Session = Depends(get_db)):
    db_item = db.query(Testimonial).filter(Testimonial.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()

@router.put("/faqs/{id}", response_model=FaqItemSchema)
def update_faq(id: int, faq: FaqItemCreate, db: Session = Depends(get_db)):
    db_item = db.query(FaqItem).filter(FaqItem.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    for key, value in faq.model_dump(exclude_unset=True).items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.delete("/faqs/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_faq(id: int, db: Session = Depends(get_db)):
    db_item = db.query(FaqItem).filter(FaqItem.id == id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Not found")
    db.delete(db_item)
    db.commit()
