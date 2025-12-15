# EUSBRO - Memoria del Proyecto

## Descripción General
Sitio web corporativo para EUSBRO, empresa de servicios de techumbres en Santiago, Chile.

**URL de producción:** https://eusbro.cl (Vercel)
**Repositorio:** https://github.com/matiasgenosur/eusbro

## Stack Tecnológico
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS 4
- **Base de datos:** Supabase (PostgreSQL)
- **Email:** Resend
- **Deploy:** Vercel
- **DNS:** Cloudflare

## Colores Corporativos
- **Primario (Amarillo):** #FCC30E
- **Secundario (Gris):** #53565A
- **WhatsApp (Verde):** #25D366

## Servicios Ofrecidos
1. Reparación de techos
2. Mantención de techos
3. Construcción de techos nuevos
4. Pintura de fachadas

## Contacto
- **WhatsApp:** +56 9 6609 1092
- **Email destino:** a.eusquiza@gmail.com
- **Email remitente:** andres.eusquiza@eusbro.cl
- **Área de servicio:** Santiago, Chile

## Garantías
- **General:** 18 meses
- **Construcción nueva:** 3 años

## Estructura de Componentes

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadata y favicon
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globales y Tailwind
│   ├── icon.svg            # Favicon SVG
│   └── api/
│       └── contact/
│           └── route.ts    # API de contacto (Supabase + Resend)
├── components/
│   ├── Header.tsx          # Navegación con logo y menú
│   ├── Hero.tsx            # Sección principal con CTA
│   ├── Services.tsx        # 4 servicios con imágenes
│   ├── Process.tsx         # 5 pasos del proceso
│   ├── Gallery.tsx         # Galería de proyectos con filtros
│   ├── Guarantee.tsx       # Sección de garantías
│   ├── ContactForm.tsx     # Formulario de contacto
│   ├── Footer.tsx          # Pie de página
│   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
└── lib/
    └── supabase.ts         # Cliente de Supabase
```

## Imágenes

### Servicios (`/public/services/`)
- reparacion.jpg
- mantencion.jpg
- construccion.jpg
- pintura.jpg

### Proyectos (`/public/projects/`)
- casa-las-condes.jpg (Residencial)
- edificio-corporativo.jpg (Comercial)
- galpon-industrial.jpg (Industrial)
- villa-lo-barnechea.jpg - "Casa en Lo Barnechea" (Residencial)
- centro-comercial.jpg (Comercial)
- bodega-logistica.jpg (Industrial)

## Variables de Entorno (Vercel)

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
RESEND_API_KEY=re_xxx
```

## Base de Datos (Supabase)

### Tabla: contacts
```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS habilitado con política de inserción anónima
```

## Configuración de Email (Resend)

- **Dominio verificado:** eusbro.cl
- **DNS:** Cloudflare (registros DKIM, SPF configurados)
- **From:** EUSBRO <andres.eusquiza@eusbro.cl>
- **To:** a.eusquiza@gmail.com

## Funcionalidades

1. **Navegación responsive** con menú hamburguesa en móvil
2. **Botón flotante de WhatsApp** siempre visible
3. **Galería filtrable** por categoría (Residencial, Comercial, Industrial)
4. **Formulario de contacto** que:
   - Guarda en Supabase
   - Envía email con Resend
   - Incluye link a WhatsApp del cliente
5. **SEO optimizado** con metadata y Open Graph
6. **Favicon SVG** con icono de techo en colores corporativos

## Notas Importantes

- El middleware de Supabase fue eliminado para evitar errores 500
- Las imágenes de servicios y proyectos vienen de Google Drive
- El dominio eusbro.cl está verificado en Resend vía Cloudflare
- Todos los CTAs principales llevan a WhatsApp
