#test with correct keys
  - should save normally
#test with extra invalid keys
  - should drop invalid keys
#test with all invalid keys
  - should not save as no keys are left
#test with no save_keys in config
  - should skip checking the keys for all