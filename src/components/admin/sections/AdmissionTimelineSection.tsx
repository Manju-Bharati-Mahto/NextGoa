"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown } from "lucide-react";

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function AdmissionTimelineSection({ data, onChange }: Props) {
  const buttons = data?.selectorButtons || [];
  const steps = data?.steps || [];

  const [openStep, setOpenStep] = useState(0);

  function update(field: string, value: any) {
    onChange({
      ...data,
      [field]: value,
    });
  }

  function updateButtons(updated: any[]) {
    onChange({
      ...data,
      selectorButtons: updated,
    });
  }

  function updateSteps(updated: any[]) {
    onChange({
      ...data,
      steps: updated,
    });
  }

  function addButton() {
    updateButtons([
      ...buttons,
      {
        label: "",
        step: 0,
      },
    ]);
  }

  function removeButton(index:number){

   const updated=[...buttons];

   updated.splice(index,1);

   updateButtons(updated);
}
  function addStep() {
    updateSteps([
      ...steps,
      {
        title: "",
        icon: "assignment",

        redCardTitle: "",
        redCardDescription: "",

        whiteCardTitle: "",
        whiteCardDescription: "",

        nextButtonLabel: "",
      },
    ]);
  }

  function removeStep(index:number){

   const updated=[...steps];

   updated.splice(index,1);

   updateSteps(updated);

   setOpenStep(-1);
}

  return (
    <div className="space-y-6">
      {/* Heading */}

      <div>
        <label className="form-label">Eyebrow</label>

        <input
          className="form-control"
          value={data?.eyebrow || ""}
          onChange={(e) => update("eyebrow", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Heading</label>

        <input
          className="form-control"
          value={data?.heading || ""}
          onChange={(e) => update("heading", e.target.value)}
        />
      </div>

      <div>
        <label className="form-label">Description</label>

        <textarea
          rows={3}
          className="form-textarea"
          value={data?.description || ""}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Selection Heading</label>

        <input
          className="form-control"
          value={data?.selectionHeading || ""}
          onChange={(e) => update("selectionHeading", e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Selection Description</label>

        <textarea
          rows={3}
          className="form-textarea"
          value={data?.selectionDescription || ""}
          onChange={(e) => update("selectionDescription", e.target.value)}
        />
      </div>

      {/* Next URL */}

      <div>
        <label className="form-label">Next URL</label>

        <input
          className="form-control"
          placeholder="/campus-life"
          value={data?.nextUrl || ""}
          onChange={(e) => update("nextUrl", e.target.value)}
        />
      </div>

      {/* Selector Buttons */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Selector Buttons</h3>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addButton}
          >
            <Plus size={16} />
            Add Button
          </button>
        </div>

        <div className="space-y-4 p-5">
          {buttons.map((button: any, index: number) => (
            <div key={index} className="flex items-center gap-4">
              <input
                className="form-control"
                placeholder="Button Label"
                value={button.label}
                onChange={(e) => {
                  const updated = [...buttons];
                  updated[index].label = e.target.value;
                  updateButtons(updated);
                }}
              />

              <input
                type="number"
                className="form-control"
                placeholder="Step Index"
                value={button.step}
                onChange={(e) => {
                  const updated = [...buttons];
                  updated[index].step = Number(e.target.value);
                  updateButtons(updated);
                }}
              />

              <button
                type="button"
                className="btn btn-danger btn-sm col-span-2"
                onClick={() => removeButton(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Steps */}

      <div className="rounded-xl border-light-all">
        <div className="flex items-center justify-between border-light px-5 py-4">
          <h3 className="font-semibold">Timeline Steps</h3>

          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={addStep}
          >
            <Plus size={16} />
            Add Step
          </button>
        </div>

        <div className="space-y-4 p-5">
          {steps.map((step: any, index: number) => {
            const isOpen = openStep === index;

            return (
              <div
                key={index}
                className="rounded-xl border-light-all overflow-hidden"
              >
                <div
                  className="flex items-center justify-between bg-gray-50 px-5 py-4 cursor-pointer"
                  onClick={() => setOpenStep(isOpen ? -1 : index)}
                >
                  <div className="font-semibold">
                    {step.title || `Step ${index + 1}`}
                  </div>

                  <div className="flex items-center gap-3">
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeStep(index);
                      }}
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="space-y-5 p-5 border-light-t">
                    <input
                      className="form-control"
                      placeholder="Title"
                      value={step.title}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].title = e.target.value;
                        updateSteps(updated);
                      }}
                    />
                    <select
                      className="form-select"
                      value={step.icon}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].icon = e.target.value;
                        updateSteps(updated);
                      }}
                    >
                      <option value="assignment">Assignment</option>
                      <option value="description">Description</option>
                      <option value="payments">Payments</option>
                      <option value="verified">Verified</option>
                      <option value="school">School</option>
                      <option value="groups">Groups</option>
                    </select>

                    <input
                      className="form-control"
                      placeholder="Red Card Title"
                      value={step.redCardTitle}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].redCardTitle = e.target.value;
                        updateSteps(updated);
                      }}
                    />

                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="Red Card Description"
                      value={step.redCardDescription}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].redCardDescription = e.target.value;
                        updateSteps(updated);
                      }}
                    />

                    <input
                      className="form-control"
                      placeholder="White Card Title"
                      value={step.whiteCardTitle}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].whiteCardTitle = e.target.value;
                        updateSteps(updated);
                      }}
                    />

                    <textarea
                      rows={3}
                      className="form-textarea"
                      placeholder="White Card Description"
                      value={step.whiteCardDescription}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].whiteCardDescription = e.target.value;
                        updateSteps(updated);
                      }}
                    />

                    <input
                      className="form-control"
                      placeholder="Next Button Label"
                      value={step.nextButtonLabel}
                      onChange={(e) => {
                        const updated = [...steps];
                        updated[index].nextButtonLabel = e.target.value;
                        updateSteps(updated);
                      }}
                    />
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
