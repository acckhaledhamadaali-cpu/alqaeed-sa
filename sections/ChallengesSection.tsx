import { HTMLAttributes } from 'react';
import { AlertTriangle, BarChart3, CheckCircle2, Droplets, FileWarning, WalletCards } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Container from '../components/Container';

const CHALLENGES: Array<{ problem: string; solution: string; Icon: LucideIcon }> = [
  { problem: 'ربح غير واضح', solution: 'ربحية مفهومة', Icon: BarChart3 },
  { problem: 'حسابات غير مرتبة', solution: 'قيود منتظمة', Icon: FileWarning },
  { problem: 'تقارير بلا قرار', solution: 'تقرير تنفيذي', Icon: CheckCircle2 },
  { problem: 'سيولة تحت الضغط', solution: 'توقع نقدي', Icon: Droplets },
  { problem: 'تكلفة CFO مرتفعة', solution: 'إشراف مرن', Icon: WalletCards },
];

export default function ChallengesSection(props: HTMLAttributes<HTMLElement>) {
  return (
    <SectionWrapper id="challenges-section-wrapper" variant="white" spacing="dense" {...props}>
      <Container id="challenges-container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
            <h2 id="challenges-title" className="text-xl font-extrabold text-slate-950 sm:text-2xl">ما الذي يربك أرقامك؟</h2>
          </div>
          <div id="challenges-list" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {CHALLENGES.map(({ problem, solution, Icon }) => (
              <article key={problem} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-extrabold text-slate-950">{problem}</h3>
                <p className="mt-1 text-sm font-bold text-emerald-700">{solution}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
