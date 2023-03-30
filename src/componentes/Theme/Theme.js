import React, { useState } from 'react';
import './Theme.css';

const Theme = () => {
    const [esModoOscuro, setEsModoOscuro] = useState(false);

    const cambiarTema = () => {
        setEsModoOscuro(!esModoOscuro);
    }


    return (
        <div className={`lightMode ${esModoOscuro ? "darkMode" : ""}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque ea esse natus, rem numquam nemo voluptatem, sint distinctio ex labore asperiores minus dignissimos nihil vero eveniet quos modi! Omnis officia ipsa consectetur. Neque, voluptas! Modi magni voluptas aut ratione perspiciatis? Porro adipisci iusto, quaerat quidem, consectetur magnam corporis aliquid animi voluptatem, earum dolores culpa ipsum pariatur facilis in obcaecati vero ad illum? Inventore rerum blanditiis cum harum, minima quod iste! Blanditiis voluptas odit assumenda voluptatum perspiciatis minima aut adipisci ducimus pariatur hic? Quod, quas laboriosam neque quam excepturi natus illo nihil, incidunt, exercitationem ratione dignissimos architecto quisquam repudiandae? Eaque rem, sequi, quasi ad blanditiis eum repellendus sit aspernatur id ab eos quo excepturi provident molestias? Libero asperiores similique quidem voluptatibus impedit magni at optio corrupti illo repellendus assumenda sequi, provident fugiat quis perspiciatis modi esse, atque iusto, officiis necessitatibus expedita eligendi! Ullam voluptas at, explicabo perspiciatis ipsum excepturi quam saepe consectetur? Reprehenderit, illum nobis, aliquam dolores ducimus explicabo corporis, amet dicta sunt ipsum maxime incidunt? Libero voluptates, nobis tempore aperiam dicta iusto mollitia, necessitatibus assumenda dolores minima non error nesciunt aliquam, molestiae perferendis hic. Beatae harum facere amet. Minus, porro enim cupiditate molestias ea ipsam nam rem impedit incidunt!
            <br />
            <button onClick={cambiarTema}> Cambiar tema </button>
        </div>
    )
}

export default Theme

// if(condicion) {
//     //codigo a ejecutar
// } else {
 
// }

// condicion ? "nombre de la clase" : ""

