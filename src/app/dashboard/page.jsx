import LineChart from "../components/LineChart";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { ImCart } from "react-icons/im";

function Page() {
  const cards = [
    {
      name: "Revenue",
      value: "53000",
      plus: "3",
      icon: <GiReceiveMoney fontSize={25} />,
    },
    {
      name: "Users",
      value: "2300",
      plus: "4",
      icon: <FaUsers fontSize={25} />,
    },
    {
      name: "Revenue",
      value: "2231",
      plus: "5",
      icon: <ImCart fontSize={25} />,
    },
  ];

  return (
    <div className="w-normal pt-9 pb-9">
      <h1 className="h1">General Statistics</h1>
      <section className="flex justify-between mt-1">
        {cards.map((item, index) => {
          let price = Number(item.value).toLocaleString("en-US");

          return (
            <div
              key={index}
              className="flex gap-10 bg-mode-extralight py-4 px-5 shadow-lg items-center rounded-lg cursor-pointer"
            >
              <div className="flex flex-col  justify-between text-text-secondary">
                <p>{item.name}</p>
                <div className="flex gap-1 items-center">
                  <h1 className="font-bold text-xl text-text-default">
                    {price}
                  </h1>
                  <h1 className="text-fivenery font-bold">+{item.plus}%</h1>
                </div>
              </div>
              <span className="shadow-md p-3 rounded-lg  text-white bg-gradient-to-tl from-primary to-fournery">
                {item.icon}
              </span>
            </div>
          );
        })}
      </section>
      <LineChart />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis
        eius quis nisi nobis, sunt dolor dicta eos, illo repudiandae officia
        amet et? Labore, nisi. Alias eveniet sit totam rem illo magnam,
        veritatis adipisci enim porro voluptatibus iste ipsa exercitationem
        fugiat, sed tenetur quis ea accusamus reprehenderit dolore sapiente,
        aliquid ullam. Quisquam, aspernatur suscipit amet corporis ratione in
        tempore corrupti, aperiam optio doloremque eligendi ducimus qui. Ad
        molestiae eaque consequatur! Magni cupiditate earum, accusamus facere
        rerum beatae inventore minus totam libero odio mollitia temporibus
        reiciendis? Similique delectus voluptates iure ducimus vel harum
        asperiores commodi neque voluptate et totam est unde, ratione cum
        aliquam dignissimos quae sint recusandae adipisci architecto fuga ipsam
        tempora pariatur voluptatum. Quibusdam amet accusamus aperiam pariatur
        alias debitis corporis aut voluptatibus porro, veniam laborum harum ipsa
        cupiditate deserunt sequi dolorem veritatis placeat facere enim illum
        modi dignissimos quam nobis. Beatae impedit, rem consectetur,
        praesentium voluptatum inventore, a non explicabo quaerat dicta tempore
        aperiam vel dolorem nobis culpa? Ex perferendis nostrum nemo ad deleniti
        molestias quibusdam modi error aut non officiis ullam ducimus, ea
        reiciendis totam, tempore minima praesentium delectus deserunt, iusto
        eligendi natus. Accusantium quos ipsa sapiente vitae recusandae eveniet
        commodi reiciendis molestias perspiciatis at cupiditate, neque in rem
        incidunt. Vero, reprehenderit soluta! Sequi molestiae corporis qui nam
        neque voluptatum fugiat temporibus at? Animi inventore consequuntur
        adipisci, laborum eos aspernatur amet repellat similique non excepturi
        earum impedit placeat id architecto rerum magnam facere blanditiis
        nesciunt tenetur voluptatibus magni rem culpa deserunt temporibus.
        Voluptate ad sit itaque officia asperiores sint eos, quam, neque non
        expedita rem aut sapiente? Hic beatae voluptatum ex natus minima
        molestiae doloribus quia maiores ratione est, placeat necessitatibus
        praesentium eligendi, pariatur incidunt labore facilis nostrum officia
        iusto ipsum asperiores magni delectus quod quis. Nemo, vero velit
        mollitia odio ullam sed aliquam sapiente earum suscipit fuga provident
        temporibus dignissimos tempora obcaecati quae ipsam ut. Porro libero
        quam qui sunt dolorum vero placeat. Reiciendis explicabo dicta tempora
        enim ab repellendus aut veniam minus nisi. Voluptate eos facere
        repellendus fuga asperiores cum ut tempora, animi dignissimos inventore.
        Voluptate saepe cum libero itaque nobis, iusto voluptates dolore aliquid
        tempore dolor quam nemo reiciendis sunt sit, doloribus nisi sapiente
        necessitatibus! Tempora nostrum illo eligendi doloremque deserunt
        reiciendis, quas dicta iure earum sapiente laborum qui eveniet nulla
        itaque est magni maiores aliquid. Rem quam molestiae unde eveniet hic
        deleniti magni impedit ad amet minima? Amet vel, molestias mollitia odit
        error nulla non soluta cupiditate eveniet, magni modi repellendus ea
        fugit molestiae accusantium ullam odio temporibus reiciendis harum
        dolores aliquam quaerat. Ad sequi consequatur excepturi! Distinctio
        omnis et a dolor. Quae sapiente doloribus culpa. Amet natus, explicabo,
        a maxime eos vero quasi iste sapiente, tenetur eius praesentium
        repudiandae vel sed provident nobis officiis corrupti distinctio commodi
        rem! Earum culpa rem, assumenda, porro sequi beatae cupiditate labore
        nemo pariatur, quaerat asperiores iure unde corrupti minima velit
        deleniti? Suscipit doloribus praesentium veniam odit quas, architecto
        placeat sit veritatis nulla sunt amet optio temporibus laboriosam
        quisquam delectus odio vero minus sint eligendi id earum, accusamus ab
        consequatur. Molestias consequatur ducimus sed, qui excepturi laudantium
        aliquam dolorum alias earum! Quos laboriosam deleniti voluptas facere
        quidem eveniet atque molestiae nihil similique, illum excepturi
        voluptatem possimus? Ullam, possimus! Provident sequi placeat
        perferendis. Earum labore accusamus laboriosam totam, perspiciatis
        deleniti minus, nemo suscipit temporibus tenetur esse? Assumenda vel
        obcaecati sequi minus explicabo itaque neque magnam delectus excepturi
        architecto, totam iusto facere repellendus quas? Similique laudantium
        possimus iusto ratione aspernatur maiores corporis quo ad quidem libero?
        Atque, sequi, obcaecati molestiae similique velit dignissimos vero
        tempora assumenda, expedita totam quas laborum? Blanditiis, architecto?
        Reprehenderit eligendi culpa numquam nihil consequuntur porro, veniam
        debitis quo totam fugit deserunt delectus eos tenetur! Quasi laborum
        magnam eaque illo officia eum, ipsam nulla deserunt. Quis tempora
        asperiores ipsa, impedit, itaque consectetur animi accusamus nam,
        explicabo iusto ratione temporibus nihil laborum? Voluptate, fuga. In
        necessitatibus suscipit minus. Quod repudiandae impedit neque, excepturi
        provident sint, nemo illo sequi veritatis repellat natus placeat modi
        cum animi laboriosam ducimus, ad explicabo architecto velit nisi
        mollitia! Quam numquam reprehenderit praesentium labore possimus quod
        eum quibusdam dolores commodi repellat tenetur rem quidem aperiam est
        quis sapiente consectetur ea, dignissimos quae exercitationem adipisci,
        ipsum laboriosam omnis. Cumque saepe, veniam voluptates perspiciatis
        expedita sint architecto nesciunt quia aut doloribus nemo recusandae
        possimus omnis. Nihil, dolor provident? Numquam esse harum atque tenetur
        a voluptas saepe repudiandae, est earum accusantium distinctio
        reiciendis at, blanditiis doloribus non magnam modi ducimus. Ad rem non
        expedita unde tempore nemo repellat natus odit, qui velit molestias, nam
        aspernatur ducimus quos amet quod dolore eveniet dolor error
        voluptatibus, vel numquam in! Ipsam accusamus culpa dicta eaque velit
        dignissimos eligendi dolores hic accusantium, veritatis autem rem,
        itaque quo sed mollitia fugit beatae illo omnis, magni corrupti
        consectetur? Natus quibusdam eos cumque beatae aut, atque suscipit quos
        esse accusamus laboriosam laudantium voluptates libero nam rem molestias
        obcaecati mollitia sequi enim placeat iste dolorum omnis et? Sed minus
        deleniti, eaque quasi delectus iure, a repellat vero aliquam quam ab
        doloribus rem aperiam voluptate excepturi molestiae, dicta blanditiis
        nam ipsa soluta eius nemo hic? Qui cumque illo est nobis, sint quam quis
        tempore. Earum illum fugit, velit error distinctio laborum molestias
        minus ducimus qui deleniti maxime animi accusamus libero, dolore quae
        delectus corporis dolores saepe officiis ab voluptatibus vero unde.
        Consequatur quos quis quo! Beatae sunt ipsa deleniti minima eaque! Minus
        rerum dolore magni veritatis vel. Magni natus animi maxime illo fugiat
        laborum, asperiores recusandae, a veritatis neque earum eaque veniam
        aliquid sunt tempore amet quos vitae. Fuga obcaecati delectus et
        repellendus itaque doloribus blanditiis, facere impedit necessitatibus
        perferendis excepturi quisquam. Iste, obcaecati. Tempore debitis
        repellendus error quos illo sed? Ipsam, et dolorum natus distinctio
        corrupti adipisci nulla deleniti laboriosam, eaque officiis dolores
        error ex dolore ut voluptatem in non illo suscipit aut, velit aliquid
        esse? At itaque eos praesentium laboriosam, fuga veritatis quaerat
        inventore ipsa reiciendis quisquam delectus officia voluptates illum
        eius laborum excepturi error expedita possimus aperiam. Eum, facilis!
        Labore commodi minus harum quaerat. Odio officia veniam facilis
        asperiores vero eligendi tempora?
      </p>
    </div>
  );
}

export default Page;
