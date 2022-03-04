### when you modify something in your schema file, you need to run this command

```
local :
npx prisma migrate dev --preview-feature
npx prisma generate

prod:
npx prisma migrate resolve --applied "20220303230430_quranmemo" --preview-feature
npx prisma db push
```
