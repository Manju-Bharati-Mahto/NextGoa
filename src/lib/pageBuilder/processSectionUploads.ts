import { uploadImage } from "@/lib/blog/uploadImage";
import { unlink } from "fs/promises";
import path from "path";

export async function processSectionUploads(
  newSections: any[],
  oldSections: any[] = [],
) {
  for (let i = 0; i < newSections.length; i++) {
    const section = newSections[i];
    const oldSection = oldSections[i];
    // Hero Section
    if (section.type === "hero") {
      const file = section.content.backgroundImageFile;

      // New image selected
      if (file && file.size > 0) {
        // Delete old image
        if (oldSection?.content?.backgroundImage) {
          try {
            await unlink(
              path.join(
                process.cwd(),
                "public",
                oldSection.content.backgroundImage,
              ),
            );
          } catch {}
        }

        // Upload new image
        section.content.backgroundImage = await uploadImage(
          file,
          "goa-uploads/pages/hero",
        );
      }

      // No new image → keep old image
      else if (oldSection?.content?.backgroundImage) {
        section.content.backgroundImage = oldSection.content.backgroundImage;
      }

      delete section.content.backgroundImageFile;
    }
    // Marquee Section
    if (section.type === "notification") {
      for (const item of section.content.items || []) {
        if (item.documentFile?.size) {
          item.link = await uploadImage(
            item.documentFile,
            "goa-uploads/pages/marqueedoc",
          );
        }

        delete item.documentFile;
      }
    }
    if (section.content.registeredImageFile?.size) {
      section.content.registeredImage = await uploadImage(
        section.content.registeredImageFile,
        "goa-uploads/pages/admissions",
      );
    }
    if (section.type === "placements") {
      const file = section.content.highlightCard?.imageFile;

      if (file && file.size > 0) {
        if (oldSection?.content?.highlightCard?.image) {
          try {
            await unlink(
              path.join(
                process.cwd(),
                "public",
                oldSection.content.highlightCard.image,
              ),
            );
          } catch {}
        }

        section.content.highlightCard.image = await uploadImage(
          file,
          "goa-uploads/pages/placements",
        );
      } else if (oldSection?.content?.highlightCard?.image) {
        section.content.highlightCard.image =
          oldSection.content.highlightCard.image;
      }

      delete section.content.highlightCard.imageFile;
    }
    // Recruiters Section
    if (section.type === "recruiters") {
      // Row 1
      for (let j = 0; j < (section.content.row1 || []).length; j++) {
        const logo = section.content.row1[j];
        const oldLogo = oldSection?.content?.row1?.[j];

        if (logo.imageFile?.size) {
          // Delete old image
          if (oldLogo?.image) {
            try {
              await unlink(path.join(process.cwd(), "public", oldLogo.image));
            } catch {}
          }

          // Upload new image
          logo.image = await uploadImage(
            logo.imageFile,
            "goa-uploads/pages/recruiters",
          );
        } else if (oldLogo?.image) {
          // Keep existing image
          logo.image = oldLogo.image;
        }

        delete logo.imageFile;
      }

      // Row 2
      for (let j = 0; j < (section.content.row2 || []).length; j++) {
        const logo = section.content.row2[j];
        const oldLogo = oldSection?.content?.row2?.[j];

        if (logo.imageFile?.size) {
          if (oldLogo?.image) {
            try {
              await unlink(path.join(process.cwd(), "public", oldLogo.image));
            } catch {}
          }

          logo.image = await uploadImage(
            logo.imageFile,
            "goa-uploads/pages/recruiters",
          );
        } else if (oldLogo?.image) {
          logo.image = oldLogo.image;
        }

        delete logo.imageFile;
      }
    }
    if (section.type === "testimonials") {
      // Google Reviews image

      if (section.content.googleImageFile?.size) {
        section.content.googleImage = await uploadImage(
          section.content.googleImageFile,
          "goa-uploads/pages/testimonial",
        );
      } else if (oldSection?.content?.googleImage) {
        section.content.googleImage = oldSection.content.googleImage;
      }

      delete section.content.googleImageFile;

      // Student images

      for (let j = 0; j < (section.content.testimonials || []).length; j++) {
        const item = section.content.testimonials[j];

        const oldItem = oldSection?.content?.testimonials?.[j];

        if (item.imageFile?.size) {
          item.image = await uploadImage(
            item.imageFile,
            "goa-uploads/pages/testimonial",
          );
        } else if (oldItem?.image) {
          item.image = oldItem.image;
        }

        delete item.imageFile;
      }
    }
    // Campus Tour Section
    if (section.type === "campus_tour") {
      const file = section.content.thumbnailFile;

      // New thumbnail uploaded
      if (file && file.size > 0) {
        // Delete old thumbnail
        if (oldSection?.content?.thumbnail) {
          try {
            await unlink(
              path.join(process.cwd(), "public", oldSection.content.thumbnail),
            );
          } catch {}
        }

        // Upload new thumbnail
        section.content.thumbnail = await uploadImage(
          file,
          "goa-uploads/pages/campus-tour",
        );
      }
      // Keep existing thumbnail
      else if (oldSection?.content?.thumbnail) {
        section.content.thumbnail = oldSection.content.thumbnail;
      }

      delete section.content.thumbnailFile;
    }
    // Why Goa Section
    if (section.type === "why_goa") {
      const file = section.content.imageFile;

      if (file && file.size > 0) {
        // Delete old image
        if (oldSection?.content?.image) {
          try {
            await unlink(
              path.join(process.cwd(), "public", oldSection.content.image),
            );
          } catch {}
        }

        // Upload new image
        section.content.image = await uploadImage(file, "goa-uploads/pages/whygoa");
      } else if (oldSection?.content?.image) {
        // Keep existing image
        section.content.image = oldSection.content.image;
      }

      delete section.content.imageFile;
    }
    // International
    if (section.type === "international") {
      const file = section.content.worldMapFile;

      if (file && file.size > 0) {
        // Delete old image
        if (oldSection?.content?.worldMap) {
          try {
            await unlink(
              path.join(process.cwd(), "public", oldSection.content.worldMap),
            );
          } catch {}
        }

        // Upload new image
        section.content.worldMap = await uploadImage(
          file,
          "goa-uploads/pages/international",
        );
      } else if (oldSection?.content?.worldMap) {
        // Keep existing image
        section.content.worldMap = oldSection.content.worldMap;
      }

      delete section.content.worldMapFile;
    }
    // Final CTA
    if (section.type === "final_cta") {
      const file = section.content.backgroundImageFile;

      if (file?.size) {
        if (oldSection?.content?.backgroundImage) {
          try {
            await unlink(
              path.join(
                process.cwd(),
                "public",
                oldSection.content.backgroundImage,
              ),
            );
          } catch {}
        }

        section.content.backgroundImage = await uploadImage(
          file,
          "goa-uploads/pages/final-cta",
        );
      } else if (oldSection?.content?.backgroundImage) {
        section.content.backgroundImage = oldSection.content.backgroundImage;
      }

      delete section.content.backgroundImageFile;
    }
    // Pages Banner
    if (section.type === "banner") {
      const file = section.content.backgroundImageFile;

      if (file?.size) {
        // Delete old image
        if (oldSection?.content?.backgroundImage) {
          try {
            await unlink(
              path.join(
                process.cwd(),
                "public",
                oldSection.content.backgroundImage,
              ),
            );
          } catch {}
        }

        // Upload new image
        section.content.backgroundImage = await uploadImage(
          file,
          "goa-uploads/pages/banner",
        );
      } else if (oldSection?.content?.backgroundImage) {
        // Keep existing image
        section.content.backgroundImage = oldSection.content.backgroundImage;
      }

      delete section.content.backgroundImageFile;
    }

    if (section.type === "accreditations") {
      const file = section.content.imageFile;

      if (file?.size) {
        if (oldSection?.content?.image) {
          try {
            await unlink(
              path.join(process.cwd(), "public", oldSection.content.image),
            );
          } catch {}
        }

        section.content.image = await uploadImage(
          file,
          "goa-uploads/pages/accreditations",
        );
      } else if (oldSection?.content?.image) {
        section.content.image = oldSection.content.image;
      }

      delete section.content.imageFile;
    }
    // Examination Schedule
    if (section.type === "examination_schedule") {
      for (const tab of section.content.tabs || []) {
        if (tab.type === "nested") {
          for (const session of tab.sessions || []) {
            for (const program of session.programs || []) {
              for (const pdf of program.pdfs || []) {
                if (pdf.fileFile instanceof File && pdf.fileFile.size > 0) {
                  pdf.file = await uploadImage(
                    pdf.fileFile,
                    "goa-uploads/pages/examination",
                  );
                }

                delete pdf.fileFile;
              }
            }
          }
        } else {
          for (const pdf of tab.pdfs || []) {
            if (pdf.fileFile instanceof File && pdf.fileFile.size > 0) {
              pdf.file = await uploadImage(
                pdf.fileFile,
                "goa-uploads/pages/examination",
              );
            }

            delete pdf.fileFile;
          }
        }
      }
    }

      if (section.type === "trending_programs") {
        const file = section.content.rightImageFile;

        if (file?.size) {
          if (oldSection?.content?.rightImage) {
            try {
              await unlink(
                path.join(process.cwd(), "public", oldSection.content.rightImage),
              );
            } catch {}
          }

          section.content.rightImage = await uploadImage(
            file,
            "goa-uploads/pages/trending",
          );
        } else if (oldSection?.content?.rightImage) {
          section.content.rightImage = oldSection.content.rightImage;
        }

        delete section.content.rightImageFile;
      }
  }
  return newSections;
}
