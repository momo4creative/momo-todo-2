import React from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spinner } from "..";
import { useTodoContext } from "../../contexts/TodoContext";

const FormAdd = () => {
  //
  const { createDocTodo } = useTodoContext();

  // useFormik
  const formik = useFormik({
    initialValues: { title: "" },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Required !"),
    }),
    onSubmit: (values, actions) => {
      // console.log(values);
      createDocTodo(values).then((res) => {
        actions.resetForm();
        actions.setSubmitting(false);
      });
    },
  });
  //
  return (
    <div className="">
      <form
        className="flex space-x-2 items-center"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="title"
          autoComplete="off"
          placeholder="todo..."
          className={`w-full px-4 py-2 border rounded-md ${
            formik.touched["title"] &&
            formik.errors["title"] &&
            "border-red-500"
          }`}
          {...formik.getFieldProps("title")}
        />
        <button
          type="submit"
          className=" w-10 h-10 text-blue-500 border"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <div className="p-2">
              <Spinner />
            </div>
          ) : (
            <HiDocumentAdd className="w-full h-full" />
          )}
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
