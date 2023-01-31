//200 , 400 ,500
const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    ...(data && {
      content: data,
    }),
  });
};
//400
const failCode = (res, data, message) => {
  res.status(400).json({
    message,
    ...(data && {
      content: data,
    }),
  });
};

//500
const errorCode = (res, message) => {
  res.status(500).json({
    message,
  });
};

module.exports = {
  successCode,
  failCode,
  errorCode,
};

// domain/categories&sortBy=backend&search=java

// const [searchParams, setSearchParams] = useSearchParams();

// searchParams.get("sortBy") // = backend
// searchParams.get("search") // = java

// //state = sortBy
// //state = search
// setSearchParams({
//   ...(sortBy && {
//     sortBy: "backend"
//   }),
//   ...(sortBy && {
//     search: "java"
//   })
// })
