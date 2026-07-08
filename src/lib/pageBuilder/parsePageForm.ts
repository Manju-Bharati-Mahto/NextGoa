export async function parsePageForm(req: Request) {
  const formData = await req.formData();
  

  const sections = JSON.parse(formData.get("sections") as string);
  const featuredImageFile = formData.get("featured_image");

  const ogImageFile = formData.get("og_image");

  sections.forEach((section: any, index: number) => {
    if (section.type === "hero") {
      section.content.backgroundImageFile = formData.get(
        `hero_background_${index}`,
      );
    }

    if (section.type === "admissions") {
      section.content.registeredImageFile = formData.get(
        `admissions_registered_${index}`,
      );
    }
    if (section.type === "placements") {
      section.content.highlightCard.imageFile = formData.get(
        `placements_image_${index}`,
      );
    }
    if (section.type === "recruiters") {
      section.content.row1?.forEach((logo: any, logoIndex: number) => {
        logo.imageFile = formData.get(`recruiters_row1_${index}_${logoIndex}`);
      });

      section.content.row2?.forEach((logo: any, logoIndex: number) => {
        logo.imageFile = formData.get(`recruiters_row2_${index}_${logoIndex}`);
      });
    }
  });

  sections.forEach((section: any, sectionIndex: number) => {
    if (section.type === "notification") {
      section.content.items?.forEach((item: any, itemIndex: number) => {
        item.documentFile = formData.get(
          `notification_file_${sectionIndex}_${itemIndex}`,
        );
      });
    }
  });

  sections.forEach((section: any, sectionIndex: number) => {
    if (section.type === "testimonials") {
      section.content.googleImageFile = formData.get(
        `testimonial_google_image_${sectionIndex}`,
      );

      section.content.testimonials?.forEach((item: any, itemIndex: number) => {
        item.imageFile = formData.get(
          `testimonial_image_${sectionIndex}_${itemIndex}`,
        );
      });
    }
  });

  sections.forEach((section: any, sectionIndex: number) => {
    if (section.type === "campus_tour") {
      section.content.thumbnailFile = formData.get(
        `campus_tour_thumbnail_${sectionIndex}`,
      );
    }
  });

  sections.forEach((section: any, index: number) => {
    if (section.type === "why_goa") {
      section.content.imageFile = formData.get(`why_goa_image_${index}`);
    }
  });

  sections.forEach((section: any, index: number) => {
    if (section.type === "international") {
      section.content.worldMapFile = formData.get(
        `international_worldmap_${index}`,
      );
    }
  });

  sections.forEach((section: any, index: number) => {
    if (section.type === "final_cta") {
      section.content.backgroundImageFile = formData.get(
        `final_cta_background_${index}`,
      );
    }
  });
  sections.forEach((section: any, index: number) => {
    if (section.type === "banner") {
      section.content.backgroundImageFile = formData.get(
        `banner_background_${index}`,
      );
    }
  });
  sections.forEach((section: any, index: number) => {
    if (section.type === "accreditations") {
      const file = formData.get(`accreditations_image_${index}`);

      section.content.imageFile = file;
    }
  });
  sections.forEach((section: any, sectionIndex: number) => {
    if (section.type !== "examination_schedule") return;

    section.content.tabs?.forEach((tab: any, tabIndex: number) => {
      // Theory / Practical
      if (tab.type === "nested") {
        tab.sessions?.forEach((session: any, sessionIndex: number) => {
          session.programs?.forEach((program: any, programIndex: number) => {
            program.pdfs?.forEach((pdf: any, pdfIndex: number) => {
              pdf.fileFile = formData.get(
                `examination_pdf_${sectionIndex}_${tabIndex}_${sessionIndex}_${programIndex}_${pdfIndex}`,
              );
            });
          });
        });
      }

      // Circulars
      else {
        tab.pdfs?.forEach((pdf: any, pdfIndex: number) => {
          pdf.fileFile = formData.get(
            `examination_pdf_${sectionIndex}_${tabIndex}_${pdfIndex}`,
          );
        });
      }
    });
  });
  sections.forEach((section: any, index: number) => {
    if (section.type === "trending_programs") {
      section.content.rightImageFile = formData.get(
        `trending_right_image_${index}`,
      );
    }
  });

  return {
    title: formData.get("title") as string,

    slug: formData.get("slug") as string,

    seo_title: formData.get("seo_title") as string,

    seo_description: formData.get("seo_description") as string,

    seo_keywords: formData.get("seo_keywords") as string,

    canonical_url: formData.get("canonical_url") as string,

    og_title: formData.get("og_title") as string,

    og_description: formData.get("og_description") as string,

    status: formData.get("status") as string,

    publish_at: formData.get("publish_at") as string,

    sections,

    featuredImageFile,

    ogImageFile,
  };
}
