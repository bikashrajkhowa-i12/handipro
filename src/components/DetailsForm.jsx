import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const DetailsForm = (props) => {
  const { fields = {}, onSubmit = {} } = props || {};

  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = field.default || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type } = e.target || {};
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => {
        const renderField = () => {
          switch (field.type) {
            case "select":
              return (
                <Form.Select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  disabled={field.disabled}
                  style={{
                    flex: 1,
                    backgroundColor: field.disabled ? "#c3c0c0ff" : undefined,
                    cursor: field.disabled ? "not-allowed" : undefined,
                  }}
                >
                  <option value="">Select</option>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </Form.Select>
              );

            default:
              return (
                <Form.Control
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  value={formData[field.name]}
                  onChange={handleChange}
                  step={field.step}
                  required={field.required}
                  disabled={field.disabled}
                  min={field.type === "number" ? 0 : undefined}
                  style={{
                    flex: 1,
                    backgroundColor: field.disabled ? "#c3c0c0ff" : undefined,
                    cursor: field.disabled ? "not-allowed" : undefined,
                  }}
                />
              );
          }
        };

        return (
          <Form.Group
            className="mb-3 d-flex flex-row gap-4 align-items-center justify-content-between"
            key={field.name}
          >
            {field.type !== "switch" && (
              <Form.Label className="me-2" style={{ minWidth: "120px" }}>
                {field.label}:
              </Form.Label>
            )}
            {renderField()}
          </Form.Group>
        );
      })}

      <div className="d-flex justify-content-center gap-2">
        <Button
          variant="outline-secondary"
          type="reset"
          onClick={() => setFormData(initialState)}
        >
          Reset
        </Button>
        <Button variant="success" type="submit">
          Calculate
        </Button>
      </div>
    </Form>
  );
};

export default DetailsForm;
