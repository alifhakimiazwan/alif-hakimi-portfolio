const Skills = () => {
  const skills = [
    {
      name: "Java",
      icon: (
        <img
          className="w-5"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          className="w-5"
          src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          className="w-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
        />
      ),
    },
    {
      name: "C",
      icon: (
        <img
          className="w-5"
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png"
        />
      ),
    },
    {
      name: "React JS",
      icon: (
        <img
          className="w-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        />
      ),
    },
    {
      name: "Node JS",
      icon: (
        <img
          className="w-5"
          src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        />
      ),
    },
    {
      name: "Express JS",
      icon: (
        <img
          className="w-5"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png"
        />
      ),
    },
    {
      name: "Mongo DB",
      icon: (
        <img
          className="w-5"
          src="https://www.svgrepo.com/show/331488/mongodb.svg"
        />
      ),
    },
    // {
    //   name: "Redux",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Firebase",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
    //     />
    //   ),
    // },
    {
      name: "SQL",
      icon: (
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        />
      ),
    },
    // {
    //   name: "Docker",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://static-00.iconduck.com/assets.00/docker-icon-icon-2048x1479-cres2he9.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Bootstrap",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Material UI",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Cypress IO",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Heroku",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://static-00.iconduck.com/assets.00/heroku-icon-icon-1843x2048-hklv6w4m.png"
    //     />
    //   ),
    // },
    // {
    //   name: "Netlify",
    //   icon: (
    //     <img
    //       className="w-5"
    //       src="https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3030170.png"
    //     />
    //   ),
    // },
  ];

  return (
    <div className="mt-32">
      <p className="text-4xl">Skills</p>
      <div className="flex flex-wrap mt-4">
        {skills.map((s, i) => (
          <span
            key={i}
            class="w-100 mb-3 py-2 px-4 bg-gray-200 rounded-3xl mr-2 flex justify-between items-baseline text-2xl hover:scale-105 duration-300 cursor-pointer"
          >
            <span>{s.icon}</span>
            <span className="ml-1">{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
