return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.add}>
            <MaterialIcons
              name="verified-user"
              color="black"
              size={48}
              color="#DFD8C8"
              style={{ marginTop: 6, marginLeft: 2 }}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Julie
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            Developer
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
            <Text style={[styles.text, styles.subText]}>Food Favorite</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {favorite.map((fav) => (
              <View style={styles.mediaImageContainer} key={fav[0].id}>
                <Image
                  source={{ uri: fav[0].urlImage }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={[styles.subText, styles.recent]}>Information</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Numbher Phone :
                <Text style={{ fontWeight: "400" }}>089638889XXX</Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Email:
                <Text style={{ fontWeight: "400" }}>andi@mail.com</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
