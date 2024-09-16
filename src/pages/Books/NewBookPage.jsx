import { FormItem } from "../../components/UI/FormItem";

export const NewBookPage = () => {
  return (
    <div>
      <form action="">
        <FormItem title="Name" />
        <FormItem title="Author" />
        <FormItem title="Page" />
        <FormItem title="Release Date" />
        <FormItem title="Price" />
        <select name="" id="">
          <option value="">Si</option>
          <option value="">No</option>
        </select>
      </form>
    </div>
  );
};
