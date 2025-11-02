# 🚀 Pasos Finales para Desplegar

## ✅ Completado

- [x] Dependencias instaladas (`npm install`)
- [x] Archivo `.env.local` creado
- [x] Build exitoso (`npm run build`)
- [x] Git inicializado
- [x] Primer commit realizado

## 📤 Próximos Pasos

### 1. Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
3. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/inteligencia-pw-landing.git`)

### 2. Conectar con GitHub y Push

Ejecuta estos comandos (reemplaza `<TU-REPO-URL>` con tu URL de GitHub):

```bash
cd /Users/imrulo.eth/inteligencia-pw-landing

# Agregar el repositorio remoto
git remote add origin <TU-REPO-URL>

# Renombrar branch a main (si es necesario)
git branch -M main

# Push al repositorio
git push -u origin main
```

### 3. Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. **Configura las Variables de Entorno:**
   - `NEXT_PUBLIC_BASE_URL` = `https://inteligencia.pw` (o tu URL de producción)
   - `NEXT_PUBLIC_DOMAIN_NAME` = `Inteligencia.pw`
5. Click en **"Deploy"**
6. Espera 1-2 minutos para que se complete el despliegue

### 4. Verificar Despliegue

- ✅ Visita la URL de Vercel (ej: `tu-proyecto.vercel.app`)
- ✅ Verifica que todas las secciones se vean correctamente
- ✅ Prueba el link de WhatsApp
- ✅ Prueba el link de email
- ✅ Verifica la imagen OG: `<url>/og-image`

### 5. (Opcional) Configurar Dominio Personalizado

1. En Vercel → Project Settings → Domains
2. Agrega tu dominio personalizado
3. Configura DNS según las instrucciones de Vercel
4. Espera la propagación DNS (puede tardar hasta 24 horas)

## 🎯 Comandos Rápidos

```bash
# Para probar localmente
npm run dev

# Para construir producción
npm run build

# Para iniciar producción localmente
npm start
```

## 📝 Notas Importantes

- El archivo `.env.local` NO se sube a GitHub (está en .gitignore)
- Las variables de entorno se configuran en Vercel
- Puedes crear un favicon opcionalmente (ver `FAVICON_INSTRUCTIONS.md`)

---

**¡Listo para desplegar!** 🎉

