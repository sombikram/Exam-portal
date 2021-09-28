package com.exam.model;

import com.exam.responseEntity.RoleResponse;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "USERS")
public class User implements UserDetails
 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String userName;

    //hides your password when sending the response with user details
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private boolean enabled=true;
    private String profile;


    @ManyToMany(cascade = {CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinTable(
                name = "USER_ROLE",
                joinColumns = { @JoinColumn(name = "userId") },
                inverseJoinColumns = { @JoinColumn(name = "roleId") }
              )
    private Set<Role> roles = new HashSet<>();

    public void addRole(Role role1) { roles.add(role1);}

    @Override
    @Bean
    public Collection<? extends GrantedAuthority> getAuthorities() {

        Set<Authority> authorities = new HashSet<>();
        this.roles.forEach(role -> {
            authorities.add(new Authority(role.getRoleName()));
        });

        return authorities;
    }

    public String getUserName() { return userName;}
    public String getPassword(){ return password; }

    @Override
    public String getUsername() { return getUserName(); }
    @Override
    public boolean isAccountNonExpired() { return true; }
    @Override
    public boolean isAccountNonLocked() { return true; }
    @Override
    public boolean isCredentialsNonExpired() { return true;}
}
