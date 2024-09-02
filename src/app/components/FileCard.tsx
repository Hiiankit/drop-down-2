import { FC, useState } from "react";
import Image from "next/image";
import Person from "../../../public/image 27.svg";
import Clock from "../../../public/clock.svg";
import Hand from "../../../public/hand.svg";
import YellowStar from "../../../public/yelloStar.svg";
import WordImage from "../../../public/wordimage.svg";

interface FileCardProps {
  file: {
    name: string;
    size: number;
    type: string;
    content: string;
    text: string;
    wordCount: number;
    category: string;
    title: string;
    subject: string;
  };
  onClick: () => void;
}

const FileCard: FC<FileCardProps> = ({ file, onClick }) => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
    onClick();
  };

  return (
    <div
      className="p-4 bg-white items-center justify-center flex shadow w-[440px] h-[172px] rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[120px] flex items-center justify-center border-2 border-[#EAF0F2] bg-[#FFFFFF] rounded-lg h-[160px] overflow-hidden">
        <p className="text-[3px]  p-1 text-center w-[100px] h-[142px] shadow-sm rounded-md overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab
          laboriosam quasi maiores aliquam necessitatibus odit earum eaque
          voluptatibus vero laborum expedita, repellendus accusamus velit. Unde,
          eos distinctio. Dolores voluptatem in et qui eaque doloribus illum
          impedit libero dignissimos tempore, magnam accusantium? Quidem enim
          vitae ipsam ab, quia molestiae exercitationem soluta impedit porro
          sed? Adipisci, rem! Qui officia, voluptate iste natus, veritatis fuga
          reprehenderit similique molestiae id perspiciatis nulla cupiditate
          sunt corrupti debitis earum eum! Quis temporibus quibusdam aliquam qui
          harum? Amet unde esse harum quisquam exercitationem voluptates odit
          iure, animi sint sit quasi perferendis repellat itaque ea aut modi.
          Cupiditate perspiciatis explicabo maiores numquam ut rerum aspernatur
          dolor qui labore exercitationem doloribus quibusdam dolorum, nihil
          sapiente? Quis inventore voluptates ratione consectetur excepturi
          minus veniam rerum consequuntur repellat, earum tenetur consequatur
          facere placeat quos, quisquam sunt quaerat quod voluptate eveniet
          blanditiis distinctio. Quae eum laudantium sunt vel impedit. Illum
          autem labore veritatis harum esse. Ex natus optio nihil. At placeat
          nostrum commodi ipsum? Nemo facilis vitae, asperiores soluta
          voluptatibus error eligendi labore eos rerum deserunt quasi aliquid
          aperiam voluptate saepe quas alias mollitia tenetur quisquam,
          assumenda vero? Voluptates in voluptatem error totam nobis, reiciendis
          laudantium labore earum, quaerat et, praesentium suscipit magni
          veniam? In voluptatibus hic cum ut laudantium eligendi porro a tempore
          aspernatur quod, enim nesciunt nobis eius quia aliquam nemo dicta
          voluptates ratione aperiam rem excepturi ab similique quas velit!
          Mollitia obcaecati sit eius architecto fugit quibusdam reiciendis,
          provident eligendi at ipsam maiores quia officiis aliquam, aut earum,
          recusandae eos voluptatum hic aliquid ut unde! Sequi fuga saepe iste
          aliquam incidunt! Esse, quaerat! Eaque corrupti soluta reiciendis iure
          dicta dolorum natus beatae cupiditate laboriosam cum, eveniet dolor!
          Nesciunt tempore, perspiciatis explicabo, autem molestiae earum
          deserunt ratione delectus nam recusandae nisi ex quia laudantium
          consequatur consequuntur facere magni nostrum nulla consectetur
          sapiente soluta corrupti quisquam vitae! Aspernatur delectus est eius
          incidunt quas sapiente, esse vel, velit repellendus nesciunt ipsum
          autem laborum culpa optio, laboriosam doloremque ducimus expedita
          itaque reprehenderit iste quo provident eligendi nobis sequi! Ex
          reiciendis laboriosam tenetur modi. Facilis eaque iste itaque corporis
          vitae quos quia quo non aliquam maxime error est asperiores, animi
          iusto distinctio expedita vel atque quasi, commodi amet? Est porro
          deserunt nesciunt quisquam, nulla quia magni vero quas doloribus
          itaque, odio nobis. Consequatur, soluta. Itaque unde dignissimos iste.
          Corporis quaerat, veniam perferendis quos excepturi qui odio eius
          soluta, hic quidem accusantium doloribus alias eum impedit doloremque
          velit ullam dolor necessitatibus facilis, magnam dolore laudantium
          quis? Exercitationem quasi molestiae iure repudiandae molestias
          voluptatem aut nostrum repellat quos sed tempora harum ipsum vitae
          esse aperiam neque quod nisi labore dolorum, minima itaque? Deserunt,
          autem officia, magnam nihil fugit earum laudantium, asperiores
          exercitationem voluptates debitis adipisci odit non consequuntur
          cupiditate? Alias aliquam dicta tempora hic non quam ut natus deleniti
          autem quas unde blanditiis aspernatur ad, reiciendis quasi. Libero
          saepe dolores eaque, dicta, pariatur quis sed officia repudiandae fuga
          laudantium distinctio cumque nostrum velit est ratione numquam autem
          assumenda culpa nesciunt. Sapiente dignissimos ipsam quidem? Mollitia.
        </p>
      </div>
      <div className="ml-4 h-[150px] w-fit  justify-center flex flex-col font-font-family ">
        <div className="w-[241px] h-[88px]">
          <h4 className="text-[18px] text-[#3D404B] w-[241px] h-[48px] text-wrap line-clamp-2  font-extrabold">
            {file.title}
          </h4>
          <p className=" text-xs text-[#7A8196] w-[241px] h-[28px] line-clamp-2">
            {file.text}
          </p>
        </div>
        <div className="w-[300px] gap-1 grid grid-cols-3 font-font-family text-xs text-[#5B6170] font-bold h-[44px]   ">
          <div className="flex bg-[#FFFFFF] rounded-full pt-[2px] pr-[8px] gap-1 pb-[2px] pl-[2px] items-center">
            <Image
              className=" bg-[#F4EAD8] rounded-full top-[-5.14px] left-[-5.14px]"
              src={Person}
              height={16}
              width={13.43}
              alt=""
            />
            <p className="text-gray-600">{file.subject}</p>
          </div>

          <div className="flex bg-[#FFFFFF] rounded-full pt-[2px] pr-[8px] pb-[2px] gap-[3px] pl-[2px] items-center">
            <Image className=" " src={Clock} height={16} width={16} alt="" />
            <p className="text-gray-600">{file.subject}</p>
          </div>
          <div className="flex bg-[#FFFFFF] rounded-full pt-[2px] pr-[8px] gap-[3px] pb-[2px] pl-[2px] items-center">
            <Image
              className=" "
              src={WordImage}
              height={16}
              width={16}
              alt=""
            />
            <p className="text-gray-800">{file.wordCount} words</p>
          </div>

          <div className="flex bg-[#FFFFFF] rounded-full gap-[3px] pt-[2px]  w-fit pr-2 pb-[2px] pl-[2px] items-center ">
            <Image
              className=" rounded-full "
              src={YellowStar}
              height={16}
              width={16}
              alt=""
            />

            <p className="">7/7</p>
          </div>
          <div className="flex w-full items-center gap-[3px]  bg-[#FFFFFF] rounded-full   pr-[4px]  ">
            <Image
              className=" rounded-full "
              src={Hand}
              height={16}
              width={16}
              alt=""
            />
            <p className=" ">{file.category}</p>
          </div>
        </div>
      </div>
      {showText && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md">
          <pre className="whitespace-pre-wrap break-words">{file.text}</pre>
        </div>
      )}
    </div>
  );
};

export default FileCard;
