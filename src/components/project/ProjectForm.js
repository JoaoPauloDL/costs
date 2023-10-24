import Input from "../form/Input";
import Select from "../form/Select";
import styles from "./ProjectForm.module.css";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select mame ="category_id" text ="Selecione a categoria"/>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}

export default ProjectForm;
