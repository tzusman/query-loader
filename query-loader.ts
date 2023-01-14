const queryRegex = /\?(pretty)?[qQ]uery$/

export default function queryLoader() {
  return {
    name: 'query-loader',
    load: (id: string) => {
      if (!id.match(queryRegex)) {
        return
      }

      const code = `export const widgetQuery = '...'`
      return { code }
    }
  }
}