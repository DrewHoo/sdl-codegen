import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: ["https://graphql.anilist.co/"],
  config: {
    namingConvention: {
      enumValues: "keep",
      namingConvention: "keep",
    },
    nonOptionalTypename: true,
    strictScalars: true,
  },

  generates: {
    "schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
