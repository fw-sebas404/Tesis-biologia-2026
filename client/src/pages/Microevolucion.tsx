/**
 * Microevolucion - Página principal sobre microevolución
 * Diseño: Eco-Educativo Natural, verde claro, bordes redondeados
 * Contenido didáctico completo para estudiantes de 14 años
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/SectionBlock";
import ConceptoDestacado from "@/components/ConceptoDestacado";
import ImageBlock from "@/components/ImageBlock";

export default function Microevolucion() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8F5E9]">
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="container max-w-4xl mx-auto">

          {/* Índice de la sección */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#4CAF50]/20 mb-8">
            <h2 className="text-xl font-bold text-[#1B5E20] mb-3">Índice de contenido</h2>
            <ol className="list-decimal list-inside text-sm text-[#388E3C]/80 space-y-1">
              <li><a href="#introduccion" className="hover:text-[#2E7D32] hover:underline">Introducción a la microevolución</a></li>
              <li><a href="#genetica-poblacional" className="hover:text-[#2E7D32] hover:underline">Genética de poblaciones y el acervo génico</a></li>
              <li><a href="#equilibrio-hardy-weinberg" className="hover:text-[#2E7D32] hover:underline">El equilibrio de Hardy-Weinberg</a></li>
              <li><a href="#seleccion-natural" className="hover:text-[#2E7D32] hover:underline">Selección natural</a></li>
              <li><a href="#deriva-genetica" className="hover:text-[#2E7D32] hover:underline">Deriva genética</a></li>
              <li><a href="#flujo-genico" className="hover:text-[#2E7D32] hover:underline">Flujo génico (migración)</a></li>
              <li><a href="#mutaciones" className="hover:text-[#2E7D32] hover:underline">Mutaciones</a></li>
              <li><a href="#especiacion" className="hover:text-[#2E7D32] hover:underline">Especiación y microevolución</a></li>
              <li><a href="#ejemplos-reales" className="hover:text-[#2E7D32] hover:underline">Ejemplos reales de microevolución</a></li>
            </ol>
          </div>

          {/* 1. Introducción */}
          <SectionBlock id="introduccion" title="1. Introducción a la microevolución">
            <p className="mb-4">
              La <strong>microevolución</strong> es un concepto fundamental en biología que describe los
              <strong> cambios en las frecuencias de los genes (alelos) dentro de una población</strong> a lo largo
              del tiempo. Estos cambios ocurren a pequeña escala — de ahí el prefijo "micro" — y pueden
              observarse en pocas generaciones.
            </p>
            <p className="mb-4">
              A diferencia de la macroevolución (que se refiere a cambios a gran escala durante millones de años,
              como la aparición de nuevas especies a partir de un ancestro común), la microevolución ocurre
              dentro de una misma especie y puede ser medida directamente por los científicos.
            </p>

            <ConceptoDestacado title="Definición clave">
              La microevolución es el cambio en la frecuencia alélica de una población a lo largo de generaciones sucesivas.
              No crea nuevas especies por sí sola, pero es el motor que impulsa la adaptación y, eventualmente,
              puede llevar a la formación de nuevas especies.
            </ConceptoDestacado>

            <p className="mb-4">
              Para entender la microevolución, primero necesitamos comprender algunos conceptos básicos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm ml-2">
              <li><strong>Población:</strong> Grupo de individuos de la misma especie que viven en la misma área y se reproducen entre sí.</li>
              <li><strong>Gen:</strong> Unidad de herencia que se transmite de padres a hijos.</li>
              <li><strong>Alelo:</strong> Una versión específica de un gen. Por ejemplo, el gen del color de ojos tiene alelos para ojos marrones y ojos azules.</li>
              <li><strong>Frecuencia alélica:</strong> La proporción de un alelo determinado respecto al total de alelos de ese gen en la población.</li>
              <li><strong>Fenotipo:</strong> Las características observables de un organismo (color, tamaño, forma, etc.).</li>
            </ul>
          </SectionBlock>

          {/* 2. Genética de poblaciones */}
          <SectionBlock id="genetica-poblacional" title="2. Genética de poblaciones y el acervo génico">
            <p className="mb-4">
              La <strong>genética de poblaciones</strong> es la rama de la biología que estudia cómo se distribuyen
              y cambian los genes en las poblaciones. Su concepto central es el <strong>acervo génico</strong>
              (o fondo genético), que es el conjunto de todos los genes y sus alelos presentes en una población
              en un momento determinado.
            </p>

            <ConceptoDestacado title="¿Qué es el acervo génico?">
              Imagina el acervo génico como una "bolsa de genes" que contiene todas las variantes genéticas
              disponibles en una población. Si en una población de 100 conejos hay 200 alelos para el color
              del pelaje (cada conejo aporta 2), y 140 de esos alelos son para pelaje marrón y 60 para
              pelaje blanco, entonces la frecuencia del alelo marrón es 0.7 (70%) y la del blanco es 0.3 (30%).
            </ConceptoDestacado>

            <p className="mb-4">
              La microevolución ocurre cuando estas frecuencias cambian de una generación a la siguiente.
              Si en la siguiente generación el alelo marrón pasa a tener una frecuencia de 0.75,
              entonces ha ocurrido microevolución.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gene_pool.svg/640px-Gene_pool.svg.png"
              alt="Diagrama de frecuencia alélica y acervo génico"
              caption="El acervo génico y cómo se calculan las frecuencias alélicas en una población"
              attribution="Khan Academy"
            />
          </SectionBlock>

          {/* 3. Equilibrio Hardy-Weinberg */}
          <SectionBlock id="equilibrio-hardy-weinberg" title="3. El equilibrio de Hardy-Weinberg">
            <p className="mb-4">
              El <strong>principio de Hardy-Weinberg</strong> es una herramienta matemática fundamental en
              genética de poblaciones. Establece que, bajo ciertas condiciones ideales, las frecuencias
              alélicas <strong>permanecen constantes</strong> de generación en generación. Es decir, si no
              actúan fuerzas evolutivas, la población no evoluciona.
            </p>

            <p className="mb-4">
              La ecuación de Hardy-Weinberg es:
            </p>

            <div className="bg-[#C8E6C9] rounded-xl p-4 my-4 text-center">
              <p className="font-bold text-lg text-[#1B5E20]">p² + 2pq + q² = 1</p>
              <p className="text-sm text-[#2E7D32] mt-2">Donde p y q son las frecuencias de dos alelos (p + q = 1)</p>
            </div>

            <p className="mb-4">
              Para que este equilibrio se mantenga, deben cumplirse <strong>5 condiciones</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm ml-2 mb-4">
              <li>Población muy grande (sin deriva genética)</li>
              <li>Apareamiento aleatorio (sin selección sexual)</li>
              <li>Sin mutaciones</li>
              <li>Sin migración (sin flujo génico)</li>
              <li>Sin selección natural</li>
            </ul>

            <p className="mb-4">
              En la realidad, <strong>ninguna de estas condiciones se cumple al 100%</strong>, por lo que
              todas las poblaciones están en algún grado de evolución. El valor del principio de Hardy-Weinberg
              es que nos permite detectar si una población está evolucionando: si las frecuencias observadas
              no coinciden con las predichas, entonces alguna fuerza evolutiva está actuando.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hardy-Weinberg_Principle.svg/640px-Hardy-Weinberg_Principle.svg.png"
              alt="Diagrama del principio de Hardy-Weinberg"
              caption="El equilibrio de Hardy-Weinberg: cálculo de frecuencias genotípicas a partir de frecuencias alélicas"
              attribution="Biology LibreTexts"
            />

            <ConceptoDestacado title="¿Por qué es importante?">
              El principio de Hardy-Weinberg funciona como una "línea base" o punto de referencia.
              Nos dice cómo sería una población que NO está evolucionando. Cualquier desviación de
              este equilibrio indica que la microevolución está ocurriendo.
            </ConceptoDestacado>
          </SectionBlock>

          {/* 4. Selección natural */}
          <SectionBlock id="seleccion-natural" title="4. Selección natural">
            <p className="mb-4">
              La <strong>selección natural</strong> es el mecanismo evolutivo más famoso y el primero en
              ser descrito científicamente, gracias a <strong>Charles Darwin</strong> y Alfred Russel Wallace
              en el siglo XIX. Es el proceso por el cual los individuos con características que les dan
              una ventaja para sobrevivir y reproducirse en su ambiente tienen más probabilidades de
              transmitir esos genes a la siguiente generación.
            </p>

            <p className="mb-4">
              La selección natural actúa sobre el <strong>fenotipo</strong> (las características visibles),
              pero sus efectos se reflejan en el <strong>genotipo</strong> (los genes) de las siguientes
              generaciones, ya que los genes responsables de los rasgos ventajosos se vuelven más frecuentes.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Tipos de selección natural</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/20">
                <h4 className="font-bold text-[#2E7D32] text-sm mb-2">Direccional</h4>
                <p className="text-xs text-[#388E3C]/80">
                  Favorece un extremo de la variación. Por ejemplo, si un ambiente se vuelve más frío,
                  los individuos con más pelaje sobreviven mejor.
                </p>
              </div>
              <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/20">
                <h4 className="font-bold text-[#2E7D32] text-sm mb-2">Estabilizadora</h4>
                <p className="text-xs text-[#388E3C]/80">
                  Favorece el valor intermedio y elimina los extremos. Por ejemplo, los bebés de
                  peso intermedio tienen mayor tasa de supervivencia.
                </p>
              </div>
              <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/20">
                <h4 className="font-bold text-[#2E7D32] text-sm mb-2">Disruptiva</h4>
                <p className="text-xs text-[#388E3C]/80">
                  Favorece ambos extremos y elimina el valor intermedio. Puede llevar a la formación
                  de dos grupos distintos dentro de la población.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">
              El ejemplo clásico: las polillas del abedul
            </h3>
            <p className="mb-4">
              Uno de los ejemplos más estudiados de selección natural es el de las
              <strong> polillas del abedul</strong> (<em>Biston betularia</em>) en Inglaterra durante la
              Revolución Industrial.
            </p>
            <p className="mb-4">
              Antes de la industrialización, la mayoría de estas polillas eran de color claro, lo que
              las camuflaba perfectamente contra la corteza clara de los árboles. Una variante oscura
              existía pero era muy rara, ya que las aves las detectaban fácilmente sobre los troncos claros.
            </p>
            <p className="mb-4">
              Con la llegada de la industria, el hollín de las fábricas oscureció los troncos de los
              árboles. Ahora, las polillas oscuras estaban mejor camufladas y las claras se volvieron
              más visibles para los depredadores. Como resultado, la frecuencia del alelo para color
              oscuro aumentó drásticamente: de menos del 1% a más del 90% en algunas zonas en pocas
              décadas.
            </p>
            <p className="mb-4">
              Cuando se implementaron controles de contaminación en el siglo XX, los árboles volvieron
              a su color claro, y las polillas claras recuperaron su ventaja, demostrando que la
              selección natural puede actuar en ambas direcciones.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Melanistic_Moths.jpg/640px-Melanistic_Moths.jpg"
              alt="Polillas del abedul claras y oscuras"
              caption="Las polillas del abedul: ejemplo clásico de selección natural direccional"
              attribution="BBC News"
            />

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Biston_betularia_f._carbonaria.jpg/640px-Biston_betularia_f._carbonaria.jpg"
              alt="Experimento de selección natural con polillas"
              caption="Simulación del experimento de selección natural con polillas del abedul"
              attribution="The Learning Zone"
            />
          </SectionBlock>

          {/* 5. Deriva genética */}
          <SectionBlock id="deriva-genetica" title="5. Deriva genética">
            <p className="mb-4">
              La <strong>deriva genética</strong> es un cambio aleatorio en las frecuencias alélicas de
              una población, causado por el <strong>azar</strong> y no por la ventaja o desventaja de
              los rasgos. A diferencia de la selección natural (que es direccional y favorece rasgos
              específicos), la deriva genética es completamente al azar.
            </p>

            <p className="mb-4">
              La deriva genética tiene un efecto mucho más fuerte en <strong>poblaciones pequeñas</strong>.
              En una población grande, el azar tiende a promediarse. Pero en una población pequeña,
              un evento aleatorio puede cambiar drásticamente las frecuencias alélicas.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Efecto fundador</h3>
            <p className="mb-4">
              Ocurre cuando un pequeño grupo de individuos se separa de la población original y forma
              una nueva colonia. Los genes de esta nueva población reflejarán solo la variación genética
              del grupo fundador, que es necesariamente menor que la de la población original.
            </p>
            <p className="mb-4">
              <strong>Ejemplo:</strong> Los colonos amish en Pensilvania (EE.UU.) descienden de un pequeño
              grupo de fundadores. Uno de ellos portaba un alelo para el síndrome de Ellis-van Creveld
              (enanismo polidáctilo). Hoy, este síndrome es mucho más frecuente en la comunidad amish
              que en la población general, no porque sea ventajoso, sino por el efecto fundador.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Efecto cuello de botella</h3>
            <p className="mb-4">
              Ocurre cuando una población se reduce drásticamente por un evento catastrófico (desastre
              natural, enfermedad, caza excesiva). Los sobrevivientes no representan una muestra fiel
              de la variación genética original, y la población resultante tendrá menos diversidad genética.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Acinoonyx_jubatus_in_California.jpg/640px-Acinoonyx_jubatus_in_California.jpg"
              alt="Efecto cuello de botella en guepardos"
              caption="El efecto cuello de botella: los guepardos sufrieron una drástica reducción poblacional hace miles de años"
              attribution="National Geographic"
            />

            <ImageBlock
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=640"
              alt="Causas del efecto cuello de botella"
              caption="Causas comunes del efecto cuello de botella: erupciones volcánicas, terremotos, caza excesiva y contaminación radiactiva"
            />

            <ConceptoDestacado title="Diferencia clave">
              La selección natural es como un "filtro inteligente" que favorece los rasgos más adaptados
              al ambiente. La deriva genética es como "lanzar una moneda": los cambios ocurren por puro
              azar, sin importar si son buenos o malos para la supervivencia.
            </ConceptoDestacado>
          </SectionBlock>

          {/* 6. Flujo génico */}
          <SectionBlock id="flujo-genico" title="6. Flujo génico (migración)">
            <p className="mb-4">
              El <strong>flujo génico</strong> (también llamado migración) es el movimiento de genes
              entre poblaciones cuando individuos de una población se trasladan a otra y se reproducen
              allí. Este intercambio introduce nuevos alelos en la población receptora y puede cambiar
              sus frecuencias alélicas.
            </p>

            <p className="mb-4">
              El flujo génico tiene dos efectos principales:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm ml-2 mb-4">
              <li><strong>Aumenta la diversidad genética</strong> de la población receptora al introducir nuevos alelos.</li>
              <li><strong>Reduce las diferencias</strong> entre poblaciones, haciéndolas más similares genéticamente.</li>
            </ul>

            <p className="mb-4">
              <strong>Ejemplo:</strong> Imagina dos poblaciones de ratones: una con pelaje predominantemente
              claro (alelo "c" en alta frecuencia) y otra con pelaje predominantemente oscuro (alelo "C"
              en alta frecuencia). Si varios ratones oscuros migran a la población clara y se reproducen,
              el alelo "C" comenzará a aparecer en la población que antes era mayoritariamente clara.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Gene_flow.jpg/640px-Gene_flow.jpg"
              alt="Diagrama de flujo génico por migración"
              caption="El flujo génico: cómo la migración de individuos transporta alelos entre poblaciones"
              attribution="Expii"
            />

            <p className="mb-4">
              La <strong>barrera</strong> al flujo génico (como ríos, montañas, océanos) puede limitar
              este intercambio y, con el tiempo, permitir que las poblaciones diverjan genéticamente,
              lo cual puede llevar a la especiación (formación de nuevas especies).
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Migration_of_fishes.jpg/640px-Migration_of_fishes.jpg"
              alt="Barreras geográficas y flujo génico"
              caption="Las barreras geográficas como montañas pueden limitar el flujo génico entre poblaciones"
              attribution="Biology educational material"
            />
          </SectionBlock>

          {/* 7. Mutaciones */}
          <SectionBlock id="mutaciones" title="7. Mutaciones">
            <p className="mb-4">
              Las <strong>mutaciones</strong> son cambios en la secuencia del ADN de un organismo. Son la
              <strong> fuente original de toda la variación genética</strong> y, por tanto, el material
              bruto sobre el que actúan todos los demás mecanismos evolutivos. Sin mutaciones, no habría
              evolución posible.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Tipos de mutaciones</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/20">
                <h4 className="font-bold text-[#2E7D32] text-sm mb-2">Mutaciones génicas</h4>
                <p className="text-xs text-[#388E3C]/80">
                  Cambios en la secuencia de bases de un gen individual. Pueden ser sustituciones,
                  inserciones o deleciones de nucleótidos.
                </p>
              </div>
              <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/20">
                <h4 className="font-bold text-[#2E7D32] text-sm mb-2">Mutaciones cromosómicas</h4>
                <p className="text-xs text-[#388E3C]/80">
                  Alteraciones más grandes que afectan la estructura o número de cromosomas:
                  deleciones, duplicaciones, inversiones y translocaciones.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">¿Las mutaciones son buenas o malas?</h3>
            <p className="mb-4">
              La mayoría de las mutaciones son <strong>neutras</strong> (no tienen ningún efecto
              observable). Algunas son <strong>perjudiciales</strong> (causan enfermedades o reducen
              la aptitud). Y unas pocas son <strong>beneficiosas</strong> (mejoran la adaptación al
              ambiente).
            </p>
            <p className="mb-4">
              Lo importante es que las mutaciones ocurren <strong>al azar</strong>, sin "dirigirse"
              hacia lo que el organismo necesita. No mutamos porque "necesitamos" cambiar: mutamos
              porque los errores en la copia del ADN son inevitables. La selección natural luego
              "filtra" esas mutaciones, favoreciendo las beneficiosas.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DNA_orange_and_green.svg/640px-DNA_orange_and_green.svg.png"
              alt="Causas de las mutaciones"
              caption="Principales causas de mutaciones: errores de replicación, radiación, sustancias químicas y virus"
            />

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Simple_DNA_Replication.svg/640px-Simple_DNA_Replication.svg.png"
              alt="Relación entre mutaciones y evolución"
              caption="Las mutaciones son la fuente de variación genética sobre la cual actúa la selección natural"
            />

            <ConceptoDestacado title="Dato importante">
              Las mutaciones son la ÚNICA fuente de nuevos alelos. La selección natural, la deriva génica
              y el flujo génico solo pueden reorganizar la variación existente, pero no crear variación nueva.
              Por eso las mutaciones son tan importantes: sin ellas, la evolución eventualmente se detendría.
            </ConceptoDestacado>
          </SectionBlock>

          {/* 8. Especiación */}
          <SectionBlock id="especiacion" title="8. Especiación y microevolución">
            <p className="mb-4">
              La <strong>especiación</strong> es el proceso por el cual una población se divide en dos
              o más especies distintas. Es el puente entre la microevolución y la macroevolución:
              la acumulación de pequeños cambios (microevolución) durante suficiente tiempo puede
              resultar en la formación de nuevas especies (macroevolución).
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Especiación alopátrica</h3>
            <p className="mb-4">
              Ocurre cuando una <strong>barrera geográfica</strong> (un río, una montaña, un océano)
              separa una población en dos grupos aislados. Cada grupo acumula cambios genéticos
              independientemente (por mutación, deriva, selección natural local), y con el tiempo
              las diferencias son tan grandes que ya no pueden reproducirse entre sí, incluso si
              la barrera desaparece.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">Especiación simpátrica</h3>
            <p className="mb-4">
              Ocurre <strong>sin barrera geográfica</strong>, cuando una nueva especie emerge dentro
              del área de distribución de la especie original. Esto puede ocurrir por cambios en el
              comportamiento (diferente hora de apareamiento), por poliploidía en plantas, o por
              explotación de un nuevo recurso/nicho ecológico.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Speciation_modes.png/640px-Speciation_modes.png"
              alt="Diagrama de especiación"
              caption="Etapas de la especiación: desde la formación de barreras hasta el aislamiento reproductivo completo"
            />

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Darwin%27s_finches_by_Gould.jpg/640px-Darwin%27s_finches_by_Gould.jpg"
              alt="Pinzones de Darwin con diferentes picos"
              caption="Los pinzones de Darwin en las Islas Galápagos: ejemplo clásico de especiación alopátrica y radiación adaptativa"
              attribution="Harvard Gazette"
            />
          </SectionBlock>

          {/* 9. Ejemplos reales */}
          <SectionBlock id="ejemplos-reales" title="9. Ejemplos reales de microevolución">
            <p className="mb-4">
              La microevolución no es solo teoría: hay numerosos ejemplos documentados y observados
              directamente por científicos. A continuación presentamos algunos de los más conocidos.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">
              Los pinzones de Darwin en las Islas Galápagos
            </h3>
            <p className="mb-4">
              En las Islas Galápagos, Charles Darwin observó diferentes especies de pinzones que
              diferían principalmente en la forma y tamaño de su pico. Cada especie se había
              adaptado a un tipo específico de alimento disponible en su isla. En 1977, una sequía
              severa en la isla Daphne Major mató a la mayoría de los pinzones de pico pequeño, ya
              que solo quedaban semillas duras y grandes. Los pinzones de pico grande sobrevivieron
              en mayor proporción, y en la siguiente generación, el tamaño promedio del pico de la
              población había aumentado significativamente. Este es un ejemplo de <strong>selección
              natural direccional</strong> documentado en tiempo real por los científicos Peter y
              Rosemary Grant.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Darwin_finches.png/640px-Darwin_finches.png"
              alt="Pinzones de Darwin en las Galápagos"
              caption="Los pinzones de Darwin: cada especie desarrolló un pico adaptado a su alimento específico"
              attribution="National Geographic Education"
            />

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">
              Resistencia a antibióticos en bacterias
            </h3>
            <p className="mb-4">
              Este es uno de los ejemplos más importantes y preocupantes de microevolución en la
              actualidad. Cuando se usa un antibiótico, la mayoría de las bacterias mueren, pero
              algunas (por mutación previa) son resistentes. Estas bacterias resistentes sobreviven
              y se reproducen, transmitiendo los genes de resistencia. Con el tiempo, toda la
              población bacteriana puede volverse resistente al antibiótico. Este es un ejemplo de
              <strong> selección natural direccional</strong> que ocurre en cuestión de meses o años,
              no de siglos. Es la razón por la que los médicos insisten en no abusar de los
              antibióticos.
            </p>

            <h3 className="text-xl font-bold text-[#1B5E20] mt-6 mb-3">
              La mosca de la fruta (Drosophila) en laboratorio
            </h3>
            <p className="mb-4">
              En experimentos de laboratorio, los científicos han observado cambios en las frecuencias
              alélicas de poblaciones de <em>Drosophila melanogaster</em> en pocas generaciones,
              dependiendo de las condiciones ambientales impuestas (temperatura, disponibilidad de
              alimento, presencia de depredadores, etc.). Estos experimentos demuestran que la
              microevolución puede ocurrir rápidamente cuando las presiones selectivas son fuertes.
            </p>

            <ImageBlock
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dinosauria.jpg/640px-Dinosauria.jpg"
              alt="Evidencias fósiles de la evolución"
              caption="Los fósiles son una de las principales evidencias de la evolución a gran escala (macroevolución), que resulta de la acumulación de microevolución a lo largo del tiempo"
            />
          </SectionBlock>

          {/* Resumen */}
          <SectionBlock title="Resumen: Los 4 mecanismos de la microevolución">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#4CAF50] text-white">
                    <th className="p-3 rounded-tl-xl text-left">Mecanismo</th>
                    <th className="p-3 text-left">Descripción</th>
                    <th className="p-3 rounded-tr-xl text-left">Efecto principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-[#4CAF50]/10">
                    <td className="p-3 font-bold text-[#1B5E20]">Selección natural</td>
                    <td className="p-3 text-[#333]">Los rasgos ventajosos aumentan en frecuencia porque sus portadores sobreviven y se reproducen mejor</td>
                    <td className="p-3 text-[#388E3C]">Adaptación al ambiente</td>
                  </tr>
                  <tr className="bg-[#F1F8E9] border-b border-[#4CAF50]/10">
                    <td className="p-3 font-bold text-[#1B5E20]">Deriva genética</td>
                    <td className="p-3 text-[#333]">Cambios aleatorios en las frecuencias alélicas, especialmente en poblaciones pequeñas</td>
                    <td className="p-3 text-[#388E3C]">Pérdida de variación genética</td>
                  </tr>
                  <tr className="bg-white border-b border-[#4CAF50]/10">
                    <td className="p-3 font-bold text-[#1B5E20]">Flujo génico</td>
                    <td className="p-3 text-[#333]">Movimiento de alelos entre poblaciones por migración de individuos</td>
                    <td className="p-3 text-[#388E3C]">Aumenta diversidad, reduce diferencias</td>
                  </tr>
                  <tr className="bg-[#F1F8E9]">
                    <td className="p-3 rounded-bl-xl font-bold text-[#1B5E20]">Mutaciones</td>
                    <td className="p-3 text-[#333]">Cambios en la secuencia del ADN que crean nuevos alelos</td>
                    <td className="p-3 text-[#388E3C] rounded-br-xl">Fuente de nueva variación</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#E8F5E9] rounded-xl p-4 border border-[#4CAF50]/30">
              <p className="text-sm text-[#1B5E20] font-semibold mb-2">Conclusión</p>
              <p className="text-sm text-[#333] leading-relaxed">
                La microevolución es el motor fundamental del cambio biológico. Comprender sus mecanismos
                nos permite entender cómo los organismos se adaptan a sus ambientes, cómo surgen
                resistencias a medicamentos, cómo la biodiversidad se genera y se mantiene, y por qué
                la conservación de poblaciones grandes y diversas es tan importante para la supervivencia
                de las especies. Los cuatro mecanismos actúan simultáneamente en toda población natural,
                y su interacción determina la trayectoria evolutiva de cada especie.
              </p>
            </div>
          </SectionBlock>

          {/* Bibliografía */}
          <SectionBlock title="Bibliografía y fuentes">
            <ul className="list-disc list-inside text-sm text-[#388E3C]/80 space-y-2 ml-2">
              <li>Understanding Evolution - University of California, Berkeley. <em>evolution.berkeley.edu</em></li>
              <li>Khan Academy - Biology. <em>khanacademy.org</em></li>
              <li>CK-12 Biology. <em>ck12.org</em></li>
              <li>National Geographic Education. <em>education.nationalgeographic.org</em></li>
              <li>Biology LibreTexts. <em>bio.libretexts.org</em></li>
              <li>Grant, P.R. & Grant, B.R. (2006). "Evolution of character displacement in Darwin's finches." <em>Science</em>, 313(5784).</li>
              <li>Futuyma, D.J. & Kirkpatrick, M. (2017). <em>Evolution</em> (4th ed.). Sinauer Associates.</li>
            </ul>
          </SectionBlock>

        </div>
      </main>

      <Footer />
    </div>
  );
}
