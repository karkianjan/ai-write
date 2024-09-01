import { Available } from "@/components/atom/icons/Available";
import { NotAvailable } from "@/components/atom/icons/Available";

interface props {
  detail: string;
  status: boolean;
}

function PlanFeatures({ detail, status }: props) {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <p className="max-w-4/5 flex-1">{detail}</p>
        <div className="h-5 w-5">
          {status ? <Available /> : <NotAvailable />}
        </div>
      </div>
    </>
  );
}

export default PlanFeatures;
