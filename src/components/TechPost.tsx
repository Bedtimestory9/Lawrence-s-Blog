import BreadCrumbs from "./BreadCrumbs";

export default function TechPost({ path }: { path: URL }) {
  return (
    <div>
      <BreadCrumbs path={path} />
    </div>
  );
}
