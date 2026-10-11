import { EnShell } from "../_en/shell";
import { enMetadata } from "../_en/metadata";
import { ServicePage } from "../_en/service-page";
import { SERVICE_PAGES } from "../_en/lib/service-pages";

const page = SERVICE_PAGES["website-design"];

export const metadata = enMetadata(page.title, page.description, page.path);

export default function Page() {
  return (
    <EnShell>
      <ServicePage page={page} />
    </EnShell>
  );
}
