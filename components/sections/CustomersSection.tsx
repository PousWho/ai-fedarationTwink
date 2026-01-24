import Bubble from '@/components/ui/Bubble';
import SectionDivider from './SectionDivider';
import { CUSTOMERS } from '@/lib/constants';

export default function CustomersSection() {
  return (
    <section id="customers" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-16">
          <SectionDivider label="Кому мы можем помочь" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMERS.map((customer, index) => (
            <Bubble key={index}>
              <p className="text-body text-aimy-text-white font-guidy text-center">
                {customer}
              </p>
            </Bubble>
          ))}
        </div>
      </div>
    </section>
  );
}
