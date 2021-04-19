import React, {useContext} from 'react';
import {ThemaContext} from './App'

const Content = () => {
  const thema = useContext(ThemaContext);
  return(
    <div className="content" style={thema}>
      <div>
        <p>
          <strong>
            Context, verileri props drilling kullanılmadan verileri aktarmayı sağlar. 
          </strong>
        </p>

        <p>
          Context, geçerli kimliği doğrulanmış kullanıcı tema veya tercih edilen dil gibi bir react bileşenleri ağacı için global olarak kabul edilebilecek verileri paylaşmak üzere tasarlanmıştır
        </p>

        <p>
          Tipik bir react uygulamasında veriler propslar aracılığı  ile parantten child a doğru aktarılır ancak bu bir uygulamadaki birçok bileşenin gerektirdiği belirli türdeki sahne türleri için külfetli olabilir context ağacın her seviyesindeki açıkça bir prop iletmek zorunda kalmadan bileşenler arasında bu gibi değerleri paylaşmanın bir yolunu sağlar
        </p>
      </div>

      <div className="part_down">
        <p>
          <strong>API</strong>
        </p>

        <pre>
          const MyContext = React.createContext(defaultValue); {"\n"} {"\n"}
          &lt;MyContext.Provider value="{/* deger girilecek */}"
          &gt;{"{children}"}lt;/MyContext.Provider&gt; {"\n"} {"\n"}
          const value = useContext(MyContext)
        </pre>
        <code></code>
      </div>
    </div>
  )
}

export default Content