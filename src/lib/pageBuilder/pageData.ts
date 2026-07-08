export function getPageData(
  body: any
) {

  return [

    body.title,

    body.slug,

    body.seo_title,

    body.seo_description,

    body.seo_keywords,

    body.canonical_url,

    body.og_title,
    
    body.og_description,

    body.featured_image,
    
    body.og_image,

    body.status,

    body.publish_at,

  ];

}