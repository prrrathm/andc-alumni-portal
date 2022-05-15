const currentYear = new Date().getFullYear();
export const yearList = Array.from(
  new Array(currentYear - 1990),
  (x, i) => i + 1991
);

export const months = [
  {key:'1', value:'January'},
  {key:'2', value:'February'},
  {key:'3', value:'March'},
  {key:'4', value:'April'},
  {key:'5', value:'May'},
  {key:'6', value:'June'},
  {key:'7', value:'July'},
  {key:'8', value:'August'},
  {key:'9', value:'September'},
  {key:'10', value:'October'},
  {key:'11', value:'November'},
  {key:'12', value:'December'}
]

export const courses = [
  {
    key: "Select an Option",
    value: "",
  },
  {
    key: "B.Sc. (Honours) Botany",
    value: "B.Sc. (Honours) Botany",
  },
  {
    key: "B.Sc. (Honours) Chemistry",
    value: "B.Sc. (Honours) Chemistry",
  },
  {
    key: "B.Sc. (Honours) Computer Science",
    value: "B.Sc. (Honours) Computer Science",
  },
  {
    key: "B.Sc. (Honours) Physics",
    value: "B.Sc. (Honours) Physics",
  },
  {
    key: "B.Sc. (Honours) Mathematics",
    value: "B.Sc. (Honours) Mathematics",
  },
  {
    key: "B.Sc. (Honours) Zoology",
    value: "B.Sc. (Honours) Zoology",
  },
  {
    key: "B.Sc. (Honours) Biomedical Science",
    value: "B.Sc. (Honours) Biomedical Science",
  },
  {
    key: "B.Com. (Honours)",
    value: "B.Com. (Honours)",
  },
  {
    key: "B.Sc. Life Sciences",
    value: "B.Sc. Life Sciences",
  },
  {
    key: "B.Sc. with Chemistry",
    value: "B.Sc. with Chemistry",
  },
  {
    key: "B.Sc. with Computer Science",
    value: "B.Sc. with Computer Science",
  },
  {
    key: "B.Sc. with Electronics",
    value: "B.Sc. with Electronics",
  },
];
