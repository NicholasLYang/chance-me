import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_SCHOOL } from "../mutations";
import CreateSchoolForm from "./CreateSchoolForm";
import { reset } from "redux-form"

const CreateSchoolPage = () => {
  return (
    <Mutation mutation={CREATE_SCHOOL}>
      {(createSchool) => (
        <div>
          <CreateSchoolForm
            onSubmit={values => {
              createSchool({variables: {name: values.name}});
              reset('createSchool');
            }}
          />
        </div>
      )}
    </Mutation>
  );
};

export default CreateSchoolPage;
