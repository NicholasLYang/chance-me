import React from "react"
import { Mutation } from 'react-apollo'
import { CREATE_SCHOOL } from '../mutations'

const CreateSchoolPage = () => {
  let input;
  return (
    <Mutation mutation={CREATE_SCHOOL}>
      {(createSchool, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createSchool({ variables: { name: input.value }})
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit"> Create School </button>
          </form>
        </div>
      )}
    </Mutation>
  )

}

export default CreateSchoolPage;