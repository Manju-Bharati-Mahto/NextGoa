"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

const ICONS = ["engineering", "nursing", "management", "hotel"];

export default function TrendingProgramSection({ data, onChange }: Props) {
  const courses = data?.courses || [];

  const [openCourse, setOpenCourse] = useState(0);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updateCourses(updated: any[]) {
    onChange({
      ...data,
      courses: updated,
    });
  }

  function addCourse() {
    updateCourses([
      ...courses,
      {
        title: "",
        href: "",
        icon: "engineering",
        buttonLabel: "Apply Now",
        tags: [],
      },
    ]);

    setOpenCourse(courses.length);
  }

  function removeCourse(index: number) {
    const updated = [...courses];

    updated.splice(index, 1);

    updateCourses(updated);
  }

  function addTag(courseIndex: number) {
    const updated = [...courses];

    updated[courseIndex].tags.push("");

    updateCourses(updated);
  }

  function removeTag(courseIndex: number, tagIndex: number) {
    const updated = [...courses];

    updated[courseIndex].tags.splice(tagIndex, 1);

    updateCourses(updated);
  }
  return (
    <div className="space-y-6">
      {/* Eyebrow */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          type="text"
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      {/* Heading */}

      <div>
        <label className="form-label">Heading</label>
        <input
          type="text"
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      {/* View All */}

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="form-label">View All Label</label>

          <input
            type="text"
            className="form-control"
            value={data?.viewAllLabel || ""}
            onChange={(e) => update("viewAllLabel", e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">View All Link</label>

          <input
            type="text"
            className="form-control"
            value={data?.viewAllLink || ""}
            onChange={(e) => update("viewAllLink", e.target.value)}
          />
        </div>
      </div>

      {/* Right Image */}

      <div>
        <label className="form-label">Right Side Image</label>

        <input
          type="file"
          accept="image/*"
          className="form-control img-input"
          onChange={(e) => {
            onChange({
              ...data,
              rightImageFile: e.target.files?.[0] || null,
            });
          }}
        />

        {(data?.rightImageFile || data?.rightImage) && (
          <img
            src={
              data?.rightImageFile
                ? URL.createObjectURL(data.rightImageFile)
                : data.rightImage
            }
            className="mt-4 h-40 rounded-xl border object-cover"
          />
        )}
      </div>

      {/* Courses */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Trending Courses</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addCourse}
          >
            <Plus size={16} />
            Add Course
          </button>
        </div>

        <div className="space-y-4 p-5">
          {courses.map((course: any, index: number) => {
            const isOpen = openCourse === index;

            return (
              <div
                key={index}
                className="rounded-xl border-light-all overflow-hidden"
              >
                {/* Header */}

                <div
                  className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                  onClick={() => setOpenCourse(isOpen ? -1 : index)}
                >
                  <div className="font-semibold">
                    {course.title || `Course ${index + 1}`}
                  </div>

                  <div className="flex items-center gap-3">
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        removeCourse(index);
                      }}
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="space-y-5 p-5 border-light-t">
                    {/* Title */}

                    <div>
                      <label className="form-label">Course Title</label>

                      <input
                        className="form-control"
                        value={course.title}
                        onChange={(e) => {
                          const updated = [...courses];

                          updated[index].title = e.target.value;

                          updateCourses(updated);
                        }}
                      />
                    </div>

                    {/* Icon */}

                    <div>
                      <label className="form-label">Icon</label>

                      <select
                        className="form-control"
                        value={course.icon}
                        onChange={(e) => {
                          const updated = [...courses];

                          updated[index].icon = e.target.value;

                          updateCourses(updated);
                        }}
                      >
                        {ICONS.map((icon) => (
                          <option key={icon} value={icon}>
                            {icon}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Button */}

                    <div>
                      <label className="form-label">Button Label</label>

                      <input
                        className="form-control"
                        value={course.buttonLabel}
                        onChange={(e) => {
                          const updated = [...courses];

                          updated[index].buttonLabel = e.target.value;

                          updateCourses(updated);
                        }}
                      />
                    </div>
                    {/* URL */}

                    <div>
                      <label className="form-label">Course URL</label>

                      <input
                        className="form-control"
                        value={course.href}
                        onChange={(e) => {
                          const updated = [...courses];

                          updated[index].href = e.target.value;

                          updateCourses(updated);
                        }}
                      />
                    </div>

                    {/* Tags */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="form-label mb-0">Tags</label>

                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => addTag(index)}
                        >
                          <Plus size={15} />
                          Add Tag
                        </button>
                      </div>
                      <div className="space-y-3">
                        {(course.tags || []).map(
                          (tag: string, tagIndex: number) => (
                            <div
                              key={tagIndex}
                              className="flex items-center gap-3"
                            >
                              <input
                                type="text"
                                className="form-control"
                                value={tag}
                                placeholder="Enter Tag"
                                onChange={(e) => {
                                  const updated = [...courses];

                                  updated[index].tags[tagIndex] =
                                    e.target.value;

                                  updateCourses(updated);
                                }}
                              />

                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => removeTag(index, tagIndex)}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
