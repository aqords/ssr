const whitepapper = [
  {
    mainTitle: "",
    text1: "",
    text2: "",
    body: [
      {
        subtitle: "",
        text1: "",
        text2: "",
        list: [
          {
            title: "",
            text: "",
          },
          {
            title: "",
            text: "",
          },
          {
            title: "",
            text: "",
          },
          {
            title: "",
            text: "",
          },
        ],
      },
    ],
  },
];

const Whitepapper = () => {
  return (
    <div className="container">
      <div className="“connect”">
        <div className="“connect__list”">
          <h2>Table of contents:</h2>
          <ul>
            {whitepapper.map((item) => (
              <li>{item.mainTitle}</li>
            ))}
          </ul>
        </div>
        <div>
          {whitepapper.map((item) => (
            <div>
              <h2 className="“text-[32px] font-bold “">{item.mainTitle}</h2>
              {item.text1 && <p>{item.text1}</p>}
              {item.text2 && <p>{item.text2}</p>}
              <div>
                {item.body.map((el) => (
                  <div>
                    <h3>{el.subtitle}</h3>
                    {el.text1 && <p>{el.text1}</p>}
                    {el.text2 && <p>{el.text2}</p>}
                    {el.list && (
                      <ul>
                        {el.list.map((target) => (
                          <li>
                            <h4>{target.title}</h4>
                            <p>{target.text}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Whitepapper;
