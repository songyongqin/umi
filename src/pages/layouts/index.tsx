import { IRouteComponentProps } from 'umi'
export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  console.log(history)
  return children
}