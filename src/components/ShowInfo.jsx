const ShowInfo = ({ data, info }) => {
  var name;
  var image;
  if (info === "class") {
    image = data.classImage;
    name = data.className;
  } else {
    image = data.image;
    name = data.name;
  }

  return (
    <div className="card max-w-96  relative bg-opacity-50 hover:image-full bg-transparent ">
      <figure>
        <img
          src={image}
          alt=""
          className="w-full hover:scale-110 duration-500 rounded-b-2xl h-full"
          style={{ height: "460px", backgroundSize: "cover" }}
        />
      </figure>
      <div className="card-body">
        <div className=" absolute bottom-20 right-8">
          <p className="text-3xl text-[#e43d4e] font-medium ">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
