'use client';

const items = [
  {
    title: 'Dashboard',
    icon: LayoutDashboardIcon,
    url: '/dashboard',
  },
  {
    title: 'Q&A',
    url: '/qa',
    icon: BotIcon,
  },
  {
    title: 'Meetings',
    url: '/meetings',
    icon: PresentationIcon,
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: CreditCardIcon,
  },
];

// const projects=[
//     {
//         title:"Project 1",
//     },
//     {
//         title:"Project 2",
//     },
// ];

export function AppSidebar() {
  const pathName = usePathname();
  const { open } = useSidebar();
  const { projects, projectId, setProjectId } = useProject();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          {open && <h1 className="text-primary/80 text-xl font-bold">RepoAssist</h1>}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn({
                          'bg-primary text-white': pathName === item.url,
                        })}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarContent>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects?.map((project) => {
                return (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <div onClick={() => setProjectId(project.id)}>
                        <div
                          className={cn(
                            'text-primary flex size-6 cursor-pointer items-center justify-center rounded-sm border bg-white text-sm',
                            {
                              'bg-primary text-white': project.id === projectId,
                            },
                          )}
                        >
                          {project.name[0]}
                        </div>
                        <span className="cursor-pointer">{project.name}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <div className="h-2"></div>
              <SidebarMenuItem>
                <Link href="/create">
                  <Button variant={'outline'} className="w-fit" size="sm">
                    <Plus />
                    {open && <p>Create Project</p>}
                  </Button>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarContent>
      </SidebarContent>
    </Sidebar>
  );
}
