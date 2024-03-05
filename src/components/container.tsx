import classNames from 'classnames'
import { HTMLAttributes } from 'react'

const Header = ({ children, className }: HTMLAttributes<HTMLDivElement>) => (
  <section
    className={classNames(
      'mb-1.5 border-b border-neutral-300 px-1 text-lg dark:border-neutral-700',
      className
    )}
  >
    {children}
  </section>
)

const Container = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => (
  <main className={classNames('w-full', className)}>{children}</main>
)

Container.Header = Header

export default Container
