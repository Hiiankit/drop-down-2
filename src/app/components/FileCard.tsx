import { FC, useState } from "react";

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
      className="p-4 bg-white flex shadow rounded-md cursor-pointer"
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
      <div className="ml-4">
        <h4 className="text-lg font-semibold">{file.title}</h4>
        <p className="text-gray-600">{file.category}</p>
        <p className="text-gray-800">{file.wordCount} words</p>
        <p className="text-gray-500 text-sm">{file.name}</p>
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
