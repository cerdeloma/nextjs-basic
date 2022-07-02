import { RedocStandalone } from 'redoc';

export default function RedocPage() {
  return (
    <RedocStandalone
      specUrl="http://petstore.swagger.io/v2/swagger.json"
      options={{
        nativeScrollbars: true,
        theme: { colors: { primary: { main: '#dd5522' } } },
      }}
    />
  )
}