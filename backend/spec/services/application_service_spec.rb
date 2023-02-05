require 'rails_helper'

RSpec.describe ApplicationService, type: :model do
  describe '#loginSigaa' do
    it 'Checks if it can log in to the SIGAA page' do
      browser = SigaaManager::ClassCollector.loginSigaa
      puts(browser.element(tag_name:'div', id:"turmas-portal", class:"simple-panel").exists?)
    end
  end
end