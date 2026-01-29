import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = "https://www.b2vibe.com/og-image.jpg",
    ogType = "website"
}) => {
    const siteTitle = "B2Vibe - E-commerce Service Provider";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical || "https://www.b2vibe.com/"} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={ogImage} />

            {/* General Keywords */}
            <meta name="keywords" content="e-commerce service provider, merchant of record, Full-outsourcing Multicanale, marketplace management, logistica e-commerce, B2Vibe" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "B2Vibe S.r.l.",
                    "url": "https://www.b2vibe.com/",
                    "logo": "https://www.b2vibe.com/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+39 02 80016631",
                        "contactType": "customer service",
                        "email": "info@b2vibe.com",
                        "areaServed": "Global",
                        "availableLanguage": ["Italian", "English", "French", "German", "Spanish"]
                    },
                    "description": "B2Vibe è un e-commerce service provider specializzato in full-outsourcing multicanale e Merchant of Record."
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
