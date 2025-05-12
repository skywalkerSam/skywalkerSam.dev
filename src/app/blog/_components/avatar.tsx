type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <a
        href="https://instagram.com/skywalkersam_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={picture} className="mr-4 h-12 w-12 rounded-full" alt={name} />
      </a>
      <a
        href="https://twitter.com/skywalkerSam_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-xl font-bold hover:underline">{name}</div>
      </a>
    </div>
  );
};

export default Avatar;
