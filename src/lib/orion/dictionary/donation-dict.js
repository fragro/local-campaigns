orion.dictionary.addDefinition('payable_to', 'donors', {
  type: String,
  label: 'Payable To Organization',
  optional: true
});
orion.dictionary.addDefinition('donor_call_to_action', 'donors', {
  type: String,
  label: 'Donor Call to Action',
  optional: true
});
orion.dictionary.addDefinition('donor_call_to_action_main_text', 'donors',
  orion.attribute('summernote', {
    label: 'Donor Call to Action',
    optional: true
  })
);