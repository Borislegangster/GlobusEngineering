import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cmsApi } from '../services/api';

interface SEOMetaProps {
  title?: string;
  description?: string;
  url?: string;
}

export function SEOMeta({ title, description, url }: SEOMetaProps) {
  const [siteName, setSiteName] = useState('Globus Engineering');
  const [defaultDesc, setDefaultDesc] = useState('Construction de bâtiments, génie civil et conception architecturale au Cameroun.');

  useEffect(() => {
    // In a real scenario, fetch default SEO settings from the backend if not provided as props
    cmsApi.getSettings().then(res => {
        const titleSetting = res.data.find((s: any) => s.key === 'site_title');
        const descSetting = res.data.find((s: any) => s.key === 'site_description');
        if (titleSetting) setSiteName(titleSetting.value);
        if (descSetting) setDefaultDesc(descSetting.value);
    }).catch(() => { /* use defaults */ });
  }, []);

  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const finalDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDesc} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />

      {/* Structured Data / Schema.org for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteName,
          "image": "https://globus-btp.com/logo.png",
          "description": finalDesc,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Quartier des Affaires",
            "addressLocality": "Ville",
            "addressCountry": "Cameroun"
          },
          "telephone": "+33 1 23 45 67 89"
        })}
      </script>
    </Helmet>
  );
}
