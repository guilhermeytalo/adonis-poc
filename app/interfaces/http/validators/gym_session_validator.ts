export const gymSessionSchema = schema.create({
  user_id: schema.number(),
  session_date: schema.string({}, [rules.date()]),
  duration_minutes: schema.number([rules.range(1, 1440)]),
  notes: schema.string.optional(),
})
