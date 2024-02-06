import { FormEvent, useRef } from "react"

import styles from './styles.module.scss'



export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);



  function handlerOnSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);

  }

  return (
    <form className={styles.container} onSubmit={(event) => handlerOnSubmit(event)} >
      <h1>useRef</h1>
      <br />
      <div className={styles.divBtn}>

        <input type="text" placeholder="Nome completo" ref={inputNameRef} />
        <input type="email" placeholder="E-mail" ref={inputEmailRef} />
        <input type="password" placeholder="Senha" ref={inputPasswordRef} />

        <button type="submit" id={styles.btn1} >
          Submeter
        </button>
      </div>
    </form >
  )
}


