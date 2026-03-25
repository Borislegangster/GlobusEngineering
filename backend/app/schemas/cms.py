from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class PageContentBase(BaseModel):
    title: str
    meta_description: Optional[str] = None
    content_json: str # Assuming JSON string for now, could be Dict
    is_published: bool = True

class PageContentCreate(PageContentBase):
    slug: str

class PageContent(PageContentBase):
    id: int
    slug: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]

    class Config:
        from_attributes = True

class ServiceItemBase(BaseModel):
    title: str
    short_description: str
    full_description: str
    icon_name: Optional[str] = None
    image_url: Optional[str] = None
    order: int = 0
    is_active: bool = True

class ServiceItemCreate(ServiceItemBase):
    slug: str

class ServiceItem(ServiceItemBase):
    id: int
    slug: str

    class Config:
        from_attributes = True

class ProjectItemBase(BaseModel):
    title: str
    category: str
    location: str
    completion_date: Optional[str] = None
    short_description: str
    full_description: str
    client_name: Optional[str] = None
    budget: Optional[str] = None
    cover_image_url: str
    gallery_urls_json: Optional[str] = None
    is_featured: bool = False
    is_published: bool = True

class ProjectItemCreate(ProjectItemBase):
    slug: str

class ProjectItem(ProjectItemBase):
    id: int
    slug: str

    class Config:
        from_attributes = True

class BlogPostBase(BaseModel):
    title: str
    author: str
    category: str
    excerpt: str
    content: str
    cover_image_url: Optional[str] = None
    is_published: bool = True

class BlogPostCreate(BlogPostBase):
    slug: str

class BlogPost(BlogPostBase):
    id: int
    slug: str
    published_date: Optional[datetime]

    class Config:
        from_attributes = True

class SiteSettingBase(BaseModel):
    key: str
    value: str

class SiteSettingCreate(SiteSettingBase):
    pass

class SiteSetting(SiteSettingBase):
    id: int

    class Config:
        from_attributes = True

class TeamMemberBase(BaseModel):
    name: str
    role: str
    quote: Optional[str] = None
    image_class: Optional[str] = None

class TeamMemberCreate(TeamMemberBase):
    pass

class TeamMember(TeamMemberBase):
    id: int

    class Config:
        from_attributes = True

class TestimonialBase(BaseModel):
    name: str
    role: str
    quote: str
    status: str = "Publié"

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
    id: int

    class Config:
        from_attributes = True

class FaqItemBase(BaseModel):
    question: str
    answer: str
    status: str = "Publié"

class FaqItemCreate(FaqItemBase):
    pass

class FaqItem(FaqItemBase):
    id: int

    class Config:
        from_attributes = True
