JSONArray jOfficesArray = response.getJSONArray("offices");
                    JSONArray responseOfficialsArr = response.getJSONArray("officials");
for (int i = 0; i < jOfficesArray.length(); i++) {

                        // get all the attributes
                        JSONObject responseOfficeObj = jOfficesArray.getJSONObject(i);
                        String officeName = responseOfficeObj.getString("name");

                        // get the indices of the officials data and get value to jump to the official data
                        JSONArray responseOfficialIndicies = responseOfficeObj.getJSONArray("officialIndices");
                        for (int j = 0; j < responseOfficialIndicies.length(); j++) {
                            int val = responseOfficialIndicies.getInt(j);

                            // Get details of officials
                            JSONObject responseOfficialObj = responseOfficialsArr.getJSONObject(val);
                            String officialName = responseOfficialObj.getString("name");

                            String officialAddress = "";
                            if (responseOfficialObj.has("address")) {
                                JSONArray addressArr = responseOfficialObj.getJSONArray("address");
                                JSONObject addressObj = addressArr.getJSONObject(0);
                                officialAddress = addressObj.getString("line1") + "," + addressObj.getString("city")
                                        + "," + addressObj.getString("state")  + ","
                                        + addressObj.getString("zip");
                            }

                            String imgUrl = "";
                            if (responseOfficialObj.has("photoUrl")) {
                                imgUrl = responseOfficialObj.getString("photoUrl");
                            }

                            // get the web URL and just the first link
                            String officeWebUrl = "";
                            if (responseOfficialObj.has("urls")) {
                                officeWebUrl = responseOfficialObj.getString("urls");

                                if(officeWebUrl.contains(","))
                                {
                                    int end = officeWebUrl.indexOf(',');
                                    officeWebUrl = officeWebUrl.substring(2, end-1);
                                    officeWebUrl = officeWebUrl.replace("\\", "");
                                }
                                else
                                {
                                    officeWebUrl = officeWebUrl.substring(2, officeWebUrl.length() - 2);
                                    officeWebUrl = officeWebUrl.replace("\\", "");
                                }
                            }

                            String officialEmail = "";
                            if (responseOfficialObj.has("emails")) {
                                JSONArray emails = responseOfficialObj.getJSONArray("emails");
                                officialEmail = emails.getString(0);
                            }

                            String partyName = "";
                            if (responseOfficialObj.has("party")) {
                                partyName = responseOfficialObj.getString("party");
                            }

                            String phoneNum = "";
                            if (responseOfficialObj.has("phones")) {
                                JSONArray phoneArr = responseOfficialObj.getJSONArray("phones");

                                for (int k = 0; k < phoneArr.length(); k++) {
                                    phoneNum = phoneNum + phoneArr.getString(k) + "\n";
                                }
                            }

                            String youtubeLink="";
                            String facebookLink="";
                            String twitterLink="";

                            // get channels array and get links of youtube
                            if (responseOfficialObj.has("channels")){
                                JSONArray channelsArr = responseOfficialObj.getJSONArray("channels");
                                for (int k=0; k < channelsArr.length(); k++){

                                    JSONObject channelObj = channelsArr.getJSONObject(k);
                                    if (channelObj.getString("type").equals("Twitter")){
                                        twitterLink = channelObj.getString("id");
                                    }
                                    if (channelObj.getString("type").equals("Youtube")){
                                        youtubeLink =  channelObj.getString("id");
                                    }
                                    if (channelObj.getString("type").equals("Facebook")){
                                        facebookLink = channelObj.getString("id");
                                    }
                                }
                            }

                            // Call the official class constructor
                            objOffice = new OfficialsClass(officeName, officialName, partyName, strAddress, officialEmail,
                                                            phoneNum, strImgUrl, facebookLink, twitterLink, youtubeLink, officeWebUrl);
                            final OfficialsClass newOffice = objOffice;

                            // call the runnable to call update function from main activity
                            mainActivity.runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    mainActivity.updateTheOfficialsList(newOffice);
                                }
                            });
                        }
                    }