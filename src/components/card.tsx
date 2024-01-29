import classNames from 'classnames'
import { HTMLAttributes, forwardRef } from 'react'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ children, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={classNames('rounded-xl border shadow', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ children, className, ...props }, ref) {
    return (
      <header
        ref={ref}
        className={classNames(
          'flex flex-col space-y-1.5 border-b p-4',
          className
        )}
        {...props}
      >
        {children}
      </header>
    )
  }
)

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLDivElement>
>(function CardTitle({ children, className, ...props }, ref) {
  return (
    <h2
      ref={ref}
      className={classNames(
        'font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
})

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLDivElement>
>(function CardDescription({ children, className, ...props }, ref) {
  return (
    <span
      ref={ref}
      className={classNames('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </span>
  )
})

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardContent({ children, className, ...props }, ref) {
    return (
      <main ref={ref} className={classNames('p-3', className)} {...props}>
        {children}
      </main>
    )
  }
)

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardFooter({ children, className, ...props }, ref) {
    return (
      <footer
        ref={ref}
        className={classNames('flex items-center p-6 pt-0', className)}
        {...props}
      >
        {children}
      </footer>
    )
  }
)

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}
