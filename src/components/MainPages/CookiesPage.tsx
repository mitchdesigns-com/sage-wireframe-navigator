import Link from 'next/link'
import React from 'react'
export type ContentBlock = Paragraph | Heading

export interface Paragraph {
  type: 'paragraph'
  children: ParagraphChild[]
}

export interface Heading {
  type: 'heading'
  level: number
  children: ParagraphChild[]
}
export type ParagraphChild = TextNode | LinkNode

export interface TextNode {
  type: 'text'
  text: string
  bold?: boolean
}

export interface LinkNode {
  type: 'link'
  url?: string
  text?: string
  children?: TextNode[]
}

interface CookiesPageProps {
  data: {
    id: number
    documentId: string
    Title: string
    content: ContentBlock[]
  }
  locale: string
}

export default async function CookiesPage({ data }: CookiesPageProps) {
  const renderChildren = (children: ParagraphChild[]) =>
    children.map((child, i) => {
      if (child.type === 'text') {
        return (
          <span
            key={i}
            style={{ fontWeight: child.bold ? 'bold' : 'normal' }}
            className={child.bold ? 'BrandonFont' : ''}
          >
            {child.text}
          </span>
        )
      } else if (child.type === 'link') {
        return (
          <Link
            key={i}
            href={child.url ?? '#'}
            className="text-primary-100 text-[12px] relative"
          >
            {child.children?.[0]?.text || child.text || ''}
          </Link>
        )
      }
      return null
    })

  const headingClassMap: Record<number, string> = {
    2: 'text-[32px] ml-[20px] uppercase BrandonFont font-extrabold text-start mb-[30px] leading-[1.1]',
    3: 'text-xl font-semibold mb-2',
    4: 'text-lg font-semibold mb-2',
    5: 'text-base font-semibold mb-2',
    6: 'text-[21px] font-medium mb-2',
  }

  return (
    <>
      <section className="bg-white text-center">
        {/* <Breadcrumb title={data.Title} /> */}

        <h1 className="text-[32px] md:text-[62px] font-semibold text-black uppercase">
          {data?.Title}
        </h1>
      </section>

      <section>
        <div className="my-8 md:my-[60px] max-w-[1432px] mx-auto px-4 md:px-0 text-dark-80">
          {data?.content?.map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <p
                  key={index}
                  className="text-justify text-base mb-2 leading-[1.6]"
                >
                  {renderChildren(item.children)}
                </p>
              )
            }
            if (item.type === 'heading') {
              const level = item.level as 2 | 3 | 4 | 5 | 6
              const tag = `h${level}` as keyof React.JSX.IntrinsicElements
              const Heading = tag as React.ElementType

              const className = headingClassMap[level] || ''

              return (
                <Heading key={index} className={className}>
                  {item.children.map((child, i) => (
                    <span key={i}>{child.text}</span>
                  ))}
                </Heading>
              )
            }

            return null
          })}
        </div>
      </section>
    </>
  )
}
