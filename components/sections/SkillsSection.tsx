import AmazonwebservicesOriginalWordmark from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import AzureOriginal from "devicons-react/icons/AzureOriginal";
import BitbucketOriginal from "devicons-react/icons/BitbucketOriginal";
import Css3Original from "devicons-react/icons/Css3Original";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import ExpressOriginal from "devicons-react/icons/ExpressOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import MaterialuiOriginal from "devicons-react/icons/MaterialuiOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import MysqlOriginal from "devicons-react/icons/MysqlOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import RedisOriginal from "devicons-react/icons/RedisOriginal";
import ReduxOriginal from "devicons-react/icons/ReduxOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import { siShadcnui } from "simple-icons";

function SqlIcon({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="20" cy="10" rx="12" ry="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 10v19c0 2.8 5.4 5 12 5s12-2.2 12-5V10M8 19c0 2.8 5.4 5 12 5s12-2.2 12-5M8 28c0 2.8 5.4 5 12 5s12-2.2 12-5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function ApiIcon({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="8"
        width="34"
        height="24"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="20"
        y="24"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
      >
        API
      </text>
    </svg>
  );
}

function ShadcnIcon({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={siShadcnui.path} />
    </svg>
  );
}

const skillItems = [
  { name: "JavaScript", Icon: JavascriptOriginal },
  { name: "TypeScript", Icon: TypescriptOriginal },
  { name: "Python", Icon: PythonOriginal },
  { name: "SQL", Icon: SqlIcon },
  { name: "HTML", Icon: Html5Original },
  { name: "CSS", Icon: Css3Original },
  { name: "React.js", Icon: ReactOriginal },
  { name: "Next.js", Icon: NextjsOriginal },
  { name: "Node.js", Icon: NodejsOriginal },
  { name: "Express.js", Icon: ExpressOriginal, iconBackdrop: true },
  { name: "Redux Toolkit", Icon: ReduxOriginal },
  { name: "Material UI", Icon: MaterialuiOriginal },
  { name: "ShadCN UI", Icon: ShadcnIcon },
  { name: "REST APIs", Icon: ApiIcon },
  { name: "MongoDB", Icon: MongodbOriginal },
  { name: "PostgreSQL", Icon: PostgresqlOriginal },
  { name: "MySQL", Icon: MysqlOriginal },
  { name: "AWS", Icon: AmazonwebservicesOriginalWordmark, iconBackdrop: true },
  { name: "Azure", Icon: AzureOriginal },
  { name: "Docker", Icon: DockerOriginal },
  { name: "Git", Icon: GitOriginal },
  { name: "GitHub", Icon: GithubOriginal, iconBackdrop: true },
  { name: "Bitbucket", Icon: BitbucketOriginal },
  { name: "Redis", Icon: RedisOriginal },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Skills across the full stack.
          </h2>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
           The stack I keep in my bucket when shipping real product work.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-2 rounded-3xl border border-white/10 bg-card p-3 sm:gap-4 sm:p-6">
          {skillItems.map(({ name, Icon, iconBackdrop }) => (
            <li
              key={name}
              className="flex min-h-24 w-[calc((100%-1rem)/3)] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-2 py-4 text-center transition-colors hover:bg-white/[0.06] sm:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-7rem)/8)]"
            >
              <span
                className={
                  iconBackdrop
                    ? "flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-white"
                    : "flex h-[42px] w-[42px] items-center justify-center"
                }
              >
                <Icon
                  size={34}
                  className="h-[34px] w-[34px]"
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
