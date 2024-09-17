'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { BarChart, DoorClosed, House, RectangleEllipsis } from 'lucide-react'
import Link from 'next/link'
import SingleItem from '../SingleItem/SingleItem'
import {
  DataSidebarConfiguration,
  DataSidebarElements
} from './SidebarRoutes.data'
import { signOut } from 'next-auth/react'

export default function SidebarRoutes() {
  return (
    <div>
      <SingleItem href="/" label="Homepage" icon={House} />
      {DataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          key={title}
          collapsible
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-blue-100/20 p-2">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 rounded-md px-6 py-2 transition-all duration-300 hover:bg-blue-100/20"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <SingleItem
        href="/generator"
        label="Generator"
        icon={RectangleEllipsis}
      />
      {DataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          key={title}
          collapsible
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-blue-100/20 p-2">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div
                  key={item}
                  className="mt-2 flex items-center justify-between rounded-md pr-1 transition-all duration-300 hover:bg-blue-100/20"
                >
                  <Link
                    href={href}
                    className="flex items-center gap-2 px-6 py-2"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                  {premium && (
                    <span className="flex gap-2 rounded-md bg-blue-400 px-2 py-1 text-xs">
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <SingleItem href="/analytics" label="Analytics" icon={BarChart} />
      <SingleItem
        onClick={async () => await signOut()}
        href='#'
        label={'Close Session'}
        icon={DoorClosed}
      />
    </div>
  )
}
