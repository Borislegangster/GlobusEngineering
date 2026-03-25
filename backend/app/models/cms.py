from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base

class PageContent(Base):
    __tablename__ = "cms_pages"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String, unique=True, index=True, nullable=False) # e.g., 'home', 'about', 'legal', 'faq'
    title = Column(String, nullable=False)
    meta_description = Column(String, nullable=True)
    content_json = Column(Text, nullable=False) # Store complex page structures as JSON
    is_published = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class ServiceItem(Base):
    __tablename__ = "cms_services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    short_description = Column(Text, nullable=False)
    full_description = Column(Text, nullable=False)
    icon_name = Column(String, nullable=True) # Lucide icon name
    image_url = Column(String, nullable=True)
    order = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)

class ProjectItem(Base):
    __tablename__ = "cms_projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    category = Column(String, nullable=False) # e.g., 'Residential', 'Commercial'
    location = Column(String, nullable=False)
    completion_date = Column(String, nullable=True)
    short_description = Column(Text, nullable=False)
    full_description = Column(Text, nullable=False)
    client_name = Column(String, nullable=True)
    budget = Column(String, nullable=True)
    cover_image_url = Column(String, nullable=False)
    gallery_urls_json = Column(Text, nullable=True) # JSON list of URLs
    is_featured = Column(Boolean, default=False)
    is_published = Column(Boolean, default=True)

class BlogPost(Base):
    __tablename__ = "cms_blog_posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    author = Column(String, nullable=False)
    category = Column(String, nullable=False)
    excerpt = Column(Text, nullable=False)
    content = Column(Text, nullable=False) # HTML or Markdown
    cover_image_url = Column(String, nullable=True)
    published_date = Column(DateTime(timezone=True), server_default=func.now())
    is_published = Column(Boolean, default=True)

class SiteSettings(Base):
    __tablename__ = "cms_settings"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String, unique=True, index=True, nullable=False) # e.g., 'contact_email', 'phone', 'address', 'facebook_url'
    value = Column(Text, nullable=False)

class TeamMember(Base):
    __tablename__ = "cms_team"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    quote = Column(String, nullable=True)
    image_class = Column(String, nullable=True)

class Testimonial(Base):
    __tablename__ = "cms_testimonials"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    quote = Column(Text, nullable=False)
    status = Column(String, default="Publié")

class FaqItem(Base):
    __tablename__ = "cms_faqs"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String, nullable=False)
    answer = Column(Text, nullable=False)
    status = Column(String, default="Publié")
