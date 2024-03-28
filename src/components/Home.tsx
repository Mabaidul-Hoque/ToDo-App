// import React from 'react'

const Home = () => {
  return (
    <div className="w-full pt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* LEFT COLUMN */}
      <div className="col-span-1 md:col-span-2">
        <div className="bg-white shadow-md rounded-md p-4 md:sticky md:top-32">
          <form action="#" className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">Add List</h1>
            {/* ADD LIST INPUT */}
            <div className="flex flex-col gap-4">
              {/* TASK TITLE */}
              <div className="text-left flex items-center gap-2">
                <label
                  className="w-48 block text-gray-700 text-xl font-semibold py-2 mb-3"
                  htmlFor="task-title"
                >
                  Task Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline glow-animation"
                  type="text"
                  id="task-title"
                  placeholder="Enter your task title..."
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* TASK DESCRIPTION */}
              <div className="text-left flex items-start gap-2">
                <label
                  className="w-48 block text-gray-700 text-lg font-semibold py-2 mb-3"
                  htmlFor="task-desp"
                >
                  Task Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline glow-animation"
                  id="task-desp"
                  placeholder="Enter your task description..."
                  rows={4}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* ADD BUTTON */}
            <div className="flex justify-end pr-5">
              <button
                type="submit"
                className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className="col-span-1 md:col-span-2">
        <div className="bg-white shadow-md rounded-md p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          sequi officiis delectus? Natus qui fuga animi iste obcaecati fugit
          consequuntur consequatur asperiores aliquam. A vitae recusandae
          possimus, aliquid voluptate illum magni est doloremque quis animi,
          ducimus, officiis architecto iste delectus? Quia perspiciatis vitae
          unde, iusto commodi odit voluptatibus nesciunt similique facere quasi
          minima accusantium, corporis, a aliquam in nostrum. Iure sunt
          accusantium animi. Eveniet ad reprehenderit porro delectus aspernatur
          dolor saepe ducimus? Temporibus atque minus quasi alias maxime! Quod
          fuga possimus qui cupiditate aperiam fugiat ex error cum blanditiis
          vitae harum libero quidem magnam, unde saepe eos odio iure suscipit
          repellendus debitis modi inventore et! Commodi optio saepe porro fugit
          excepturi doloribus voluptas esse. Cumque velit illo dolorem dolore
          nemo odio at inventore animi provident error nostrum obcaecati minus,
          labore sit perspiciatis? Aliquid neque quam reprehenderit ducimus est
          harum natus nobis consequatur totam, ab aperiam provident vero. Soluta
          illo consectetur aliquam minus omnis rerum, a earum ut tempore.
          Asperiores tempore sequi ullam nemo aperiam repudiandae quae. Saepe
          quis impedit exercitationem officiis velit dolore perspiciatis, est
          vero, ipsam debitis cumque quidem maiores laborum hic dolores nam
          eligendi fuga quam officia eveniet minima ex reprehenderit fugiat
          quaerat. Quisquam, non animi molestiae facere amet repellendus
          assumenda laborum quasi? Quis sed, doloremque voluptatem, animi
          nostrum veritatis sit nulla officia doloribus quia in illum voluptates
          modi qui blanditiis. Ipsam eius sint rerum error distinctio velit
          nulla facere rem quaerat blanditiis saepe voluptatem, iure ad delectus
          minus accusantium voluptatum ducimus recusandae, quisquam accusamus?
          Aliquam repudiandae, aliquid quisquam maiores minus ratione iste
          reiciendis possimus magnam beatae sequi cum numquam in voluptates amet
          ad nihil? Laborum eos ea a voluptatum inventore aspernatur, qui nemo
          nostrum et mollitia suscipit dolore cupiditate quaerat debitis
          doloremque officia illum expedita corrupti dolorum necessitatibus esse
          porro tempore. Minima vitae dolore doloremque sint nobis magni
          explicabo blanditiis repudiandae exercitationem, tenetur, temporibus
          illum veritatis qui saepe dicta officiis enim odit amet dignissimos
          quisquam debitis itaque perspiciatis. Voluptatibus deleniti a, eveniet
          corporis asperiores eligendi velit minus, recusandae consequuntur,
          nulla tempora? Ea necessitatibus iure veniam deserunt cum totam,
          provident nihil, maiores eius optio, ut doloremque voluptates? Aliquam
          laboriosam deleniti ab autem, qui temporibus asperiores dolore cum
          corrupti numquam molestiae sit quidem delectus doloribus eius aperiam
          aspernatur unde animi nulla eum ullam. Laudantium repellat minima
          repudiandae vel ipsum quibusdam neque tenetur consectetur commodi, ab
          reprehenderit architecto quo natus voluptates minus id enim velit sed,
          sunt odio numquam. Eveniet quasi corrupti tempore aperiam voluptas,
          assumenda odit iure in asperiores qui hic temporibus doloremque,
          sapiente minus cupiditate consectetur quae non repellat voluptatibus
          beatae? Neque eaque laboriosam itaque. Perferendis eum dolore velit
          quasi dignissimos. Nobis dicta omnis cumque, veniam harum voluptatibus
          voluptatem eos ab ipsum architecto dolor ad numquam, quam
          reprehenderit velit, molestias ut expedita amet exercitationem
          obcaecati officiis? Maiores, eveniet perspiciatis. Aspernatur eaque
          temporibus nesciunt eveniet ipsam praesentium quos, ducimus quae dicta
          ex perferendis modi enim. Nobis veniam quia laboriosam qui id,
          quibusdam sed non iste dignissimos quae obcaecati quod earum
          perspiciatis eligendi ratione animi est error eius quaerat, deleniti
          suscipit. At facilis fuga, velit molestiae sit ut dolores iure
          laborum. Vel iste cum illum facere mollitia esse nam aliquam,
          excepturi quos ullam ipsa totam suscipit porro aspernatur et ab sed
          possimus ut voluptate. Nihil officia cum ipsa aperiam id, velit rerum
          vitae voluptas dolorem iste perferendis corrupti laboriosam corporis
          quidem, non fuga sed repellendus tempora placeat illo iusto voluptatum
          blanditiis autem suscipit. Voluptas blanditiis in dolore voluptatibus
          dolorem eius qui ullam suscipit iste vitae eum debitis maiores,
          facilis aut repellendus tenetur id cumque ipsa? Dolor suscipit, quae
          velit necessitatibus voluptatem minus fugit facilis minima delectus
          qui corporis, distinctio perferendis, cum molestiae doloremque eius
          aperiam animi sed! Omnis ad minus harum, illo repellendus, ipsa iure
          sint qui totam, perferendis cupiditate excepturi dicta aliquam.
          Impedit ducimus ipsum ullam eligendi quas fugiat exercitationem velit
          ad odit, assumenda, voluptas fugit quisquam! Dignissimos reiciendis,
          minus reprehenderit aliquam praesentium ea voluptate commodi explicabo
          velit. Doloremque perspiciatis libero necessitatibus architecto,
          delectus veritatis similique voluptate commodi sequi nihil rem illum
          nulla obcaecati incidunt iure at. Sapiente doloremque quia laboriosam
          sint autem praesentium quod voluptates porro. Corporis quo quaerat
          facere aperiam minus maiores dignissimos voluptates assumenda
          reprehenderit? Veritatis, corporis. Ullam atque assumenda accusamus
          iure debitis, qui odio tenetur aspernatur tempora dolorem eaque esse
          libero sunt! Repellendus, nesciunt architecto velit perferendis
          consequuntur rerum, natus recusandae eveniet reiciendis, error
          corrupti sint ratione accusantium dicta sapiente eligendi. Ducimus,
          cum? Ut molestias voluptatum amet, fugit optio, recusandae magni
          labore illum aliquid delectus hic repellendus saepe perferendis. Odit
          illo necessitatibus ad eligendi distinctio voluptate recusandae,
          minima atque maxime sequi sit sunt odio eveniet repellendus dicta
          voluptatem molestias veritatis animi numquam deleniti quasi nemo
          minus. Dolorem quibusdam, dolor, in vel repellendus sint architecto
          itaque ipsum explicabo autem animi ipsa sed earum et nulla minus,
          possimus quod molestias commodi debitis odio eius ea fugit. Minima
          dolores officiis eveniet doloribus ipsum animi similique consequatur
          necessitatibus temporibus possimus, dolorem minus non nemo
          voluptatibus rem distinctio culpa dolorum vel impedit quo. Sit
          reiciendis consectetur reprehenderit sint voluptas. Culpa, cupiditate
          doloribus? Suscipit beatae dolores sunt, et consequuntur vel repellat
          est illo eaque officia ducimus nobis fuga maiores voluptatibus sint
          quod eveniet quia expedita? A repellat corrupti dolore, ex aspernatur
          molestias doloribus amet laudantium commodi unde cum dolor
          consequuntur enim nam expedita, distinctio maxime ipsum ipsa. Commodi
          ipsam animi perferendis consequuntur magnam natus dolorem repudiandae
          quisquam optio ipsum amet velit maiores eius, sunt labore illo
          aperiam, odio impedit dolor dolorum? Perferendis dolorum numquam
          maxime dolorem qui voluptatibus. Saepe minus inventore porro modi
          soluta quos rerum. Similique non nulla labore velit corporis nisi
          perspiciatis cupiditate vitae consequatur fuga temporibus magnam
          consequuntur quia exercitationem eos iusto ut delectus, voluptate
          minus rem, possimus eaque dignissimos! Ex nobis cupiditate natus
          deserunt exercitationem sed necessitatibus fuga, consequuntur
          temporibus iusto alias aut impedit ullam voluptatibus placeat dolores
          maxime, blanditiis eveniet excepturi quod accusantium aspernatur
          explicabo? Ipsam veritatis earum aperiam aspernatur, harum voluptatum
          fugiat sequi assumenda tenetur voluptate, id pariatur quibusdam quo
          corrupti et, quam esse. Possimus adipisci quae aspernatur voluptas
          voluptates rerum a libero fuga consequuntur?
        </div>
      </div>
    </div>
  );
};

export default Home;
